// -------------------------------------------- 3

/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

// const hours = 14;
// const minutes = 20;
// let time = '';

// if(minutes === 0) {
//     time = `${hours} г.`;    
// } else {
//     time = `${hours} г. ${minutes} хв.`;
// }

// const time = minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`;
// console.log(time);










// -------------------------------------- 6

/*
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */


// const sub = "vip";
// let canConnect;

// if(sub === "pro" || sub === "vip") {
//     canConnect = true;
// } else {
//     canConnect = false;
// }

// let canConnect = sub === "pro" || sub === "vip";


// console.log("Can connect", canConnect);




/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */


// const isOnline = true;
// const isFriend = true;
// const isDnd = true; 

// //                      true && true && false
// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log("Можна відкрити чат?", canOpenChat);
 


