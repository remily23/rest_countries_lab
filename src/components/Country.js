const Country = ({ country }) => {

    return(
        <div>
            {/* creates paragraph with each country name being in the place of common */}
            <p>{country.name.common}</p>
            </div>
    )

}

export default Country;