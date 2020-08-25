import React, { useState, useEffect } from 'react';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, []);


  const [selectedCountry, setSelectedCountry] = useState([]);

  const handleAddCountry = (country) => {
    const newCountry = [...selectedCountry, country];
    setSelectedCountry(newCountry);
  }

  return (
    <div className="App">
      <h1>Country Loaded : {countries.length}</h1>
      <h4>Country Added : {selectedCountry.length}</h4>
      <Cart cart={selectedCountry}></Cart>
      <ul>
        {
          countries.map((country, index) => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }
      </ul>
    </div>
  );
}

export default App;
