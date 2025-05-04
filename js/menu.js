const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-button");

export const handleChangeMenu = menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  menuBtn.innerHTML = menuBtn.classList.contains("active")
    ? "&#10006;"
    : "&#9776;";
});