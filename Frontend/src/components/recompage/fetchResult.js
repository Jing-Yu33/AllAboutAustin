import React, { useState, useEffect } from 'react';
import { DataBase } from '../../apis/DataBase';
import { Link } from 'react-router-dom'

const fetchResult = (weight) => {
    const [result, setResult] = useState([])

    const fetchResult = async () => {
        const response = 
            await DataBase.get('/zipcodes/ranking', {
                crossdomain: true,
                params: {
                    food: weight.Food,
                    traffic: weight.Traffic, 
                    education: weight.Education
                }
            })
        const resultList = response.data.map((zipcode) => {
            return(
                <div key={zipcode.zipcode}>
                    <Link to={`/zipcodes/${zipcode.zipcode}`}>{zipcode.zipcode}</Link>
                </div>
            )
        })
        setResult(resultList)
    }

    useEffect(() => {
        fetchResult();
    }, [weight]);

    return result;
}

export default fetchResult