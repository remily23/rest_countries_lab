import React from "react";
import Country from "./Country";

const CountryList = ({listOfCountries}) => {
    
    const mappedCountries = listOfCountries.map(country => {
        return <Country
                country={country}
                />
    })

    return(
        <section>
        {mappedCountries}
        </section>
    )

}

export default CountryList;