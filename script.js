// На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням).
// Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо

const first = document.getElementById("first");
const second = document.getElementById("second");
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault();
})
first.addEventListener("input", () => {

    if(first.value.indexOf("https://", [0]) === -1) {
        first.value = "https://" + first.value;
    }
})

button1.addEventListener("click", () => {
    window.location.href = `${first.value}`;
})

second.addEventListener("input", () => {

    if(second.value.indexOf("https://", [0]) === -1) {
        second.value = "https://" + second.value;
    }
})
button2.addEventListener("click", () => {
    window.location.href = `${second.value}`;
})


