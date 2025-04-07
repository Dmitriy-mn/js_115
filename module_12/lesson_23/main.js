import axios from "axios";

import './style.css'

const BASE_URL = "http://localhost:3001/todos"; 


const container = document.querySelector(".list");
const form = document.querySelector(".todo__form");

form.addEventListener("submit", handleSubmit);
container.addEventListener("click", handleUpdate);
container.addEventListener("click", handleDelete);

async function serviceTodos(url = BASE_URL, options = {}) {
    const response = await axios(url, options);
    return response.data;
}

serviceTodos(BASE_URL)
    .then(data => {
        container.insertAdjacentHTML("beforeend", createMarkup(data))
    })
    .catch(error => console.log(error))


function createMarkup(arr) {
    return arr.map(({ id, title, completed }) => `
        <li class="list__item" data-id="${id}">
            <input type="checkbox" class="list__checbox" ${completed && "checked"}/>
            <h2 class="list__title">${title}</h2>
            <button class="list__btn">x</button>
        </li>
    `).join("")
}

async function handleSubmit(event) {
    event.preventDefault();

    const { todo } = event.currentTarget.elements;
    
    if(!todo.value.trim()) {
        return;
    }

    try {
        const data = await serviceTodos(BASE_URL, {
            method: "POST",
            data: {
                title: todo.value,
                completed: false
            }
        })
        console.log([data]);
        
        container.insertAdjacentHTML("beforeend", createMarkup([data]))
    } catch(error) {
        console.log(error.mesage)
    } finally {
        form.reset();
    }
}

async function handleUpdate(event) {
    if(!event.target.classList.contains("list__checbox")) {
        return;
    }
    event.preventDefault();

    const parent = event.target.closest(".list__item");
    const id = parent.dataset.id;

    try {
        const data = await serviceTodos(`${BASE_URL}/${id}`, {
            method: "PATCH",
            data: {
                completed: event.target.checked
            }
        })
        event.target.checked = data.completed;
    } catch(error) {
        console.log(error.message);
    }
}

async function handleDelete(event) {
    if(!event.target.classList.contains("list__btn")) {
        return;
    }

    const parent = event.target.closest(".list__item");
    const id = parent.dataset.id;

    try {
        await serviceTodos(`${BASE_URL}/${id}`, {
            method: "DELETE"
        })
        
        parent.remove();
    } catch(error) {
        console.log(error.message);
    }
    
}