import React, { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
        <LoadCountries></LoadCountries>
    </div>
  )
}

const LoadCountries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setCountries(data));
    }, []);
    return (
        <div className="App">
            <p>Countries {countries.length}</p>
        </div>
    )
};

