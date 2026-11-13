const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".food-card");
filters.forEach(button => button.addEventListener("click", () => {
  filters.forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  const category = button.dataset.filter;
  cards.forEach(card => {
    card.hidden = category !== "all" && card.dataset.category !== category;
  });
}));

let language = "fr";
document.getElementById("langBtn").addEventListener("click", () => {
  language = language === "fr" ? "ar" : "fr";
  document.documentElement.lang = language;
  document.body.dir = language === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-fr][data-ar]").forEach(element => {
    element.innerHTML = element.dataset[language];
  });
  document.getElementById("langBtn").textContent = language === "fr" ? "العربية" : "Français";
});
document.getElementById("year").textContent = new Date().getFullYear();
