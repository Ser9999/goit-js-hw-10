const BASE_URL = 'https://restcountries.com/v3.1/name/';
const countriesInfoFields = 'fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
  return fetch(`${BASE_URL}${name}?${countriesInfoFields}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}
