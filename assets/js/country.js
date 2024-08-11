let countries = [];

function renderCountries() {
  countryList.innerHTML = countries.map( x => `<li class="country-item">
    <img src="${ x.flags.png}" alt="${x.translations.tur.common} Bayrağı">
    <div class="country-item-inform">
    <h3> ${x.translations.tur.common} </h3>
    <p> <strong>Popülasyon:</strong> ${x.population.toLocaleString()} </p>
    <p><strong>Bölge:</strong> ${x.region}</p>
    <p><strong>Başkent:</strong> ${x.capital}</p>
    </div>
  </li>`).join('');
}

let themeBtn = document.querySelector('#darkModeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});


function init() {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(res => {
      countries = res;
      renderCountries();
    });
}

init();