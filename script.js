const menu = document.querySelector(".menu");
const nav = document.querySelector(".overlay");
const close = document.querySelector("#exit");

menu.addEventListener('click', () => {
    nav.classList.toggle("hide-mobile");
});

close.addEventListener('click', () => {
    nav.classList.toggle("hide-mobile");
});