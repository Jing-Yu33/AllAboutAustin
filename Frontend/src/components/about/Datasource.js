import React from 'react';

class DataSource extends React.Component {
    render() {
        return (
        <ul className="list-group">
            <li className="list-group-item active">Data Sources </li>
            <li className="list-group-item"><a href="https://data.austintexas.gov/Transportation-and-Mobility/Radar-Traffic-Counts/i626-g7ub" target="_blank" rel="noopener noreferrer">Radar Traffic Counts: </a> Contains traffic volume information for locations throughout Austin. </li>
            <li className="list-group-item"><a href="https://data.austintexas.gov/Health-and-Community-Services/Austin-High-School-Graduation-Rates/xeb7-q8v3" target="_blank" rel="noopener noreferrer">Austin High School Graduation Rates:</a>  Contains graduation rates for Austin high schools. </li>
            <li className="list-group-item"><a href="https://developers.zomato.com/api" target="_blank" rel="noopener noreferrer">Zomato API: </a> Contains restraunt averaged user ratings, and other information, from the Zomato restraunt information service. </li>
            <li className="list-group-item"><a href="https://data.austintexas.gov/Locations-and-Maps/Zipcodes/ghsj-v65t" target="_blank" rel="noopener noreferrer">Zip codes Map: </a> Contains KML and GeoJSON files of Austin Zip codes </li>
            <li className="list-group-item"><a href="https://developer.tomtom.com/traffic-api" target="_blank" rel="noopener noreferrer">Tomtom Traffic API: </a> Contains current traffic speed and flow based on coordinates </li>
        </ul>
        );
    }
}

export default DataSource;
