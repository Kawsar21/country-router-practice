import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const { name, capital, region, nativeName } = props.country;
    return (
        <div className="Country">
            <h4>Country: {name}</h4>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Native Name: {nativeName}</p>
            <Link to={`/name/${name}`} style={{textDecoration: 'none'}}>Click for more</Link>
        </div>
    );
};

export default Country;