const Country = ({ country, handleCountryUpdate }) => {

    const handleButtonClick = () => {
        handleCountryUpdate(country);
    }

    return(
        <div>
            {/* creates paragraph with each country name being in the place of common */}
            <p>{country.name.common}</p>
            <button onClick={handleButtonClick}>Visited Country</button>
            </div>
    )

}

export default Country;