fetch("https://restcountries.eu/rest/v2/all")
.then(res=>res.json())
.then(data=>{
    displayCountries(data);
})


const displayCountries = countries =>{

    const countriesDiv = document.getElementById('courntries');
    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.className ='country';
        const countryInfor =`
        <h3 class ="country-name">${country.name}</h3>
        <p>${country.capital}</p>
        `
        countryDiv.innerHTML=countryInfor;
        countriesDiv.appendChild(countryDiv);
    });
}