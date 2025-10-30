// Efecto de entrada suave del texto
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  setTimeout(() => hero.classList.add("show"), 300);
});