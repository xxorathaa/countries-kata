import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCountries } from './api/country';
import { Country } from './api/types';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    getCountries().then((response) => {
      setCountries(response);
    })
  })

  return (
    <div className="App">
      {countries.map((country: Country, index: number) => {
        return (
          <div key={`country-${index}`}>
            <p>{country.name.common}</p>
            <p>{country.capital[0]}</p>
            <p>{country.flags.png}</p>
            <p>{country.region}</p>
            <p>{country.population}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
