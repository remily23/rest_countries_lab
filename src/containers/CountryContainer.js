import { useState, useEffect } from "react";

const CountryContainer = () => {
    // useState to make an empty array (null), will create the array of countries once first country fetch request is sent
    const [countries, setCountries] = useState([]);

    // async fetches country data (promise)
    const fetchCountry = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        // update data state
        setCountries(data);

    }
    // useEffect hook to get country data with fetchCountry
    useEffect(() => {
        fetchCountry();
    },[]) 

    return(
        <h1>Country Bucket List</h1>
    )
}

export default CountryContainer;