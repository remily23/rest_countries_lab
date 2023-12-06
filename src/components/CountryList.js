import React from "react";
import Country from "./Country";

const CountryList = ({listOfCountries, handleCountryUpdate}) => {
    // mappedCountries stores Country elements from listOfCountries, takes each country and passes to the function
    const mappedCountries = listOfCountries.map(country => {
        return <Country
                    country={country} 
                    handleCountryUpdate={handleCountryUpdate}
            />
    })

    return(
        <section>
        {mappedCountries}
        </section>
    )

}

export default CountryList;