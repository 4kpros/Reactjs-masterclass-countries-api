import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {

    const [data, setData] = useState([]);
    const [dataOutput, setDataOutput] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(40);
    //Get data from API
    useEffect(() => {
        if(playOnce){
            axios.get(
                "https://restcountries.com/v3.1/all"
            ).then((res) => {
                setData(res.data);
                setPlayOnce(false);
            });
        }
        
    
        //Add filter
        const dataOutput = () => {
            //Transform array to object
            const countryObject = Object.keys(data).map((i) => data[i])
            const arrayOutput = countryObject.sort((a, b) => {
                return b.population - a.population
            });
            arrayOutput.length = rangeValue;
            setDataOutput(arrayOutput);
        }
        dataOutput();
    }, [data, rangeValue, playOnce]);

    return (
        <div className="countries">
            <div className="sort-container">
                <input type="range" min="1" max="250" value={rangeValue} onChange={(e) => setRangeValue(e.target.value)}/>
                <span className="range-value">{rangeValue}</span>
            </div>
            <ul className="countries-list">
                {dataOutput.map((country) => (
                    <Card country={country} key={country.name.official}/>
                ))}
            </ul>
        </div>
    );
};

export default Countries;
