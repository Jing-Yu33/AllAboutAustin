import React from 'react';

class DataSource extends React.Component {
    render() {
        return (
        <ul className="list-group">
            <li className="list-group-item active">DataSource: </li>
            <li className="list-group-item"><a href="">Data Source1</a> desc </li>
            <li className="list-group-item"><a href="">Data Source2</a> desc </li>
            <li className="list-group-item"><a href="">Data Source3</a> desc </li>
        </ul>
        );
    }
}

export default DataSource;