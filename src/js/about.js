const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

themeToggle.addEventListener("input", () => {
  html.setAttribute(
    "data-theme",
    html.dataset.theme == "autumn" ? "dracula" : "autumn"
  );
});
// =======================================================

const url = new URLSearchParams(window.location.search);

const query = url.get("name");

fetch(`https://restcountries.com/v3.1/name/${query}`)
  .then((data) => {
    return data.json();
  })
  .then((country) => {
    console.log(country[0]);
  });
