const botaoMenu = document.querySelector(".navMenu");
const menu = document.querySelector(".menu");

botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("menu--ativo");
});