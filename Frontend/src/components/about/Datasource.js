import React from 'react';

class DataSource extends React.Component {
    render() {
        return (
        <ul className="list-group">
            <li className="list-group-item active">Data Sources </li>
            <li className="list-group-item"><a href="https://data.austintexas.gov/Transportation-and-Mobility/Travel-Sensors/6yd9-yz29" target="_blank" rel="noopener noreferrer">Austin Government Travel Sensors: </a> Contains traffic speed and other information for various locations throughout Austin. </li>
            <li className="list-group-item"><a href="https://data.austintexas.gov/Health-and-Community-Services/Austin-High-School-Graduation-Rates/xeb7-q8v3" target="_blank" rel="noopener noreferrer">Austin High School Graduation Rates:</a>  Contains graduation rates for Austin high schools. </li>
            <li className="list-group-item"><a href="https://developers.zomato.com/api" target="_blank" rel="noopener noreferrer">Zomato API: </a> Contains restraunt averaged user ratings, and other information, from the Zomato restraunt information service. </li>
        </ul>
        );
    }
}

export default DataSource;
