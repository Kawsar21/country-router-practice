import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { name } = useParams();
    const [country, setCountry] = useState([]);
    console.log(country);
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => setCountry(data))
    }, []);
    return (
        <div>
            <h2>This is country components: {name}</h2>
        </div>
    );
};

export default CountryDetails;