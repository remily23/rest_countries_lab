import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {
    // useState to make an empty array (null), will create the array of countries once first country fetch request is sent
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    // async fetches country data (promise)
    const fetchCountry = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        // update data state
        setCountries(data);
    }

    // ... spread operator to update visitedCountries by making a copy of the current array
    const markCountryAsVisited = (country) => {
        const updatedCountriesToVisit = [...countries];
        const updatedVisitedCountries = [...visitedCountries];

        const countryLocation = updatedCountriesToVisit.indexOf(country);

        updatedCountriesToVisit.splice(countryLocation, 1);
        setCountries(updatedCountriesToVisit);

        updatedVisitedCountries.push(country);
        setVisitedCountries(updatedVisitedCountries);
    }

    // useEffect hook to get country data with fetchCountry
    useEffect(() => {
        fetchCountry();
    },[]) 

    return(
        <>
            <h1>Country Bucket List</h1>
            <h2>All Countries</h2>
            {/* pass in country prop */}
            <CountryList 
            listOfCountries={countries} 
            handleCountryUpdate={markCountryAsVisited}
            />
        <CountryList
            listOfCountries={visitedCountries}
            handleCountryUpdate={markCountryAsVisited}
            />
        </>    
    )
}

export default CountryContainer;