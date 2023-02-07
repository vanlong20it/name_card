document.addEventListener("DOMContentLoaded", () => {
  const btnDark = document.getElementById("dark-mode");
  const btnLight = document.getElementById("light-mode");

  btnLight.addEventListener("click", () => {
    document.documentElement.classList.remove("dark");
  });
  btnDark.addEventListener("click", () => {
    document.documentElement.classList.add("dark");
  });
});
