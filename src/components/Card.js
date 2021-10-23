import React from 'react';

const Card = (props) => {

    //Destructuring
    const {country} = props;
    console.log(country);

    return (
        <li className="card">
            <img src={country.flags.png} alt="Flag" />
            <div className="data-container">
                <ul>
                    <li>{country.name.official}</li>
                    <li>{country.capital}</li>
                    <li>{country.population}</li>
                </ul>
            </div>
        </li>
    );
};

export default Card;