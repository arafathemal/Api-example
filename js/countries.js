const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = countries => {
    const divContainer = document.getElementById('countries')
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `<h2>Name: ${country.name}</h2>
        <h4> Capital: ${country.capital}</h4>
        <button onclick = loadCountryByName('${country.name}')>details</button>
        `;

        // same 
        // const h3 = document.createElement('h3');
        // h3.innerText =`Name: ${country.name} ` ;
        // const p = document.createElement('p');
        // p.innerText = `Capital: ${country.capital}, Population: ${country.population}`
        // div.appendChild(h3);
        // div.appendChild(p);
        divContainer.appendChild(div)


    });
}
const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data[0]))

}
const displayCountry = country => {
    const section = document.getElementById('search')
    section.innerHTML = `<h2> Name: ${country.name}</h2>
    <h3> Capital: ${country.capital}</h3>
    <img width = "200px"; src="${country.flag}">`;
}