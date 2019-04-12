import React from 'react';

import axios from 'axios';

const getLocation = async (zipcode) => {
    var response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=AIzaSyA1Kk6GzjZDS0FhojVc0LJqTc4YcwSBE8w`)
    if(response.data.results[0]){
        return {
            [zipcode]: {
                lat: response.data.results[0].geometry.location.lat,
                lng: response.data.results[0].geometry.location.lng
            }
        }
    }
}

export default getLocation
