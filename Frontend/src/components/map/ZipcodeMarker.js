import React from 'react';
import { Marker } from 'react-google-maps';

import history from '../../history';

const ZipcodeMarker = (props) => {

    const onMarkerClick = () => {
        history.push(`/zipcodes/${props.zipcode}`)
    };
    
    const icon = {
        path: "M22-13h-44v23h16l6 5 6-5h16z",
        fillColor: "white", 
        fillOpacity: 0.8,
        strokeColor: "white",
        strokeOpacity: 0.8
    }
    
    return (
        <Marker
            onClick={onMarkerClick}
            label={props.zipcode}
            icon={icon}
            {...props}
        />
    );
};

export default ZipcodeMarker;