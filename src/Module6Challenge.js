import React , { useState } from 'react'
import './style.css'

const Module6Challenge = () => {

        const [countries, setCountries] = useState([
            {name: 'Singapore', city: 'Singapore', population: '6014723'},
        {name: 'Thailand', city: 'Bangkok', population: '71801279'},
        {name: 'Malaysia', city: 'Kuala Lumpur', population: '34308525'},
        {name: 'Indonesia', city: 'Jakarta', population: '227534122'},
        {name: 'Phillipines', city: 'Manila', population: '117337368'},
        ])

        const [countryname, setCountryName] = useState("");
        const [countrycity, setCountryCity] = useState("");
        const [countrypopulation, setCountryPopulation] = useState("");
        const [country, setCountry] = useState(countries);
    

    const handleCountryNameTextChange = (event) => {
        setCountryName(event.target.value)
    };

    const handleCountryCityTextChange = (event) => {
        setCountryCity(event.target.value)
    };

    const handleCountryPopulationTextChange = (event) => {
        setCountryPopulation(event.target.value)
    };
    

    const handleSubmit = (event) => {
        event.preventDefault()
        // alert(countryname + " " + countrycity + " " + countrypopulation)
        if (countryname === undefined || countryname === "" || countrycity === undefined || countrycity === "" || countrypopulation === undefined || countrypopulation === "" ){
            alert("Input boxes cannot be empty");
        }
        else{
            setCountries(oldValues => {
                return oldValues.concat({ name: countryname, city: countrycity, population: countrypopulation })
            })
        }
        
    };

    

    const updateCountry = name => {
        // alert(countryname + " " + countrycity + " " + countrypopulation)
        const index = countries.findIndex(country => country.name === name);
        const countryNewValues = {name: countryname, city: countrycity, population: countrypopulation};
        if (countryname === undefined || countryname === "" || countrycity === undefined || countrycity === "" || countrypopulation === undefined || countrypopulation === "" ){
            alert("Input boxes cannot be empty");
        }
        else{
            alert("Updating Country " + name +  " with the following values " 
                + "Country: " +  JSON.stringify(countryNewValues.name)
                + "City: " + JSON.stringify(countryNewValues.city)
                + "Population: " + JSON.stringify(countryNewValues.population));
                setCountries(oldValues => {
                    return oldValues.filter(country => country.name !== name)
                })
                setCountries(oldValues => {
                    return oldValues.concat({ name: countryname, city: countrycity, population: countrypopulation })
                })
        }
    }

    const deleteCountry = name => {
        setCountries(oldValues => {
            return oldValues.filter(country => country.name !== name)
        })
    }

    const sortCountriesAscending = (e) => {
        e.preventDefault()
        setCountries(oldValues => 
            [...oldValues].sort((a, b) => parseInt(a.population) - parseInt(b.population)) 
        );
    };

    const sortCountriesDescending = (e) => {
        e.preventDefault()
        setCountries(oldValues => 
            [...oldValues].sort((a, b) => parseInt(b.population) - parseInt(a.population)) 
        );
    };
    
  return (
    <div>
        {/* //Country data input */}
        TEST
        <form onSubmit={handleSubmit}>
        <input type='text' defaultValue="Country Name" value={countryname} onChange={handleCountryNameTextChange}/>
        <input type='text' defaultValue="City" value={countrycity} onChange={handleCountryCityTextChange}/>
        <input type='text' defaultValue="Population" value={countrypopulation} onChange={handleCountryPopulationTextChange}/>
      <input  className="module8Challenge" type='submit' value="Add Country"></input>
      <button className="module8Challenge" onClick={sortCountriesAscending}>Sort by Population Ascending</button>
      <button className="module8Challenge" onClick={sortCountriesDescending}>Sort by Population Descending</button>
      
      </form>
      
      <br/>


      {countries && countries.map(country => (
        <ul className="CountryList">
            <li key={country.name}>
                <h1>{country.name} - {country.population}</h1>
                <br/>
                <div className="CountryList"><span>{country.city}</span>
                <button className="module8Challenge" onClick={() => updateCountry(country.name)}>Update</button>
                <button className="module8Challenge" onClick={() => deleteCountry(country.name)}>Delete</button></div>
                
            </li>
            </ul>
        ))}

      
    </div>
  )
}

export default Module6Challenge
