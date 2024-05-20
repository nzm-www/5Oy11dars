const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;
themeToggle.addEventListener("input", () => {
  html.setAttribute(
    "data-theme",
    html.dataset.theme == "autumn" ? "dracula" : "autumn"
  );
});
const template = document.querySelector("template");
const countriesList = document.getElementById("countries-list");

const updataUI = (countries) => {
  countries.forEach((country) => {
    const {
      flags: { svg },
      name: { common },
      population,
      region,
      capital,
    } = country;

    const clone = document.querySelector("template");
    const card = clone.content.cloneNode(true);
    const link = card.querySelector("#card-link");
    const image = card.querySelector("img");
    const name = card.querySelector("h2");
    const populate = card.querySelector("#population");
    const regionn = card.querySelector("#region");
    const capitall = card.querySelector("#capital");


    name.textContent = common;
    populate.textContent = population;
    image.src = svg;
    regionn.textContent = region;
    capitall.textContent = capital;
    link.href = `/about.html?name=${common}`;

    countriesList.appendChild(card);
  });
};

fetch("https://restcountries.com/v3.1/all")
  .then((data) => {
    return data.json();
  })
  .then((davlat) => {
    updataUI(davlat);
  });
