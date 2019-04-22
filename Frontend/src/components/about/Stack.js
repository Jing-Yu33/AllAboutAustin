import React from 'react';

class Stack extends React.Component {
    
    render() {
        return (            
            <div className="jumbotron">
                <h3 className="display-4">Tools</h3>
                <div className="row">
                    <div className="col-lg-4 my-sm-3">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item active">Front End</li>
                            <li className="list-group-item"><b>React</b>: JS Front-end Framework</li>
                            <li className="list-group-item"><b>Bootstrap</b>: CSS Library for styling</li>
                            <li className="list-group-item"><b>Mocha</b>: A JavaScript testing tool </li>
                            <li className="list-group-item"><b>Selenium</b>: A GUI testing tool</li>
                            <li className="list-group-item"><b>NPM</b>: Node Package Manager for React</li>
                        </ul>
                    </div>

                    <div className="col-lg-4 my-sm-3">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item active">Back End</li>
                            <li className="list-group-item"><b>Springboot</b>: A Java Framework for building RESTful API</li>
                            <li className="list-group-item"><b>Postman</b>: Testing and documentation tool for API</li>
                            <li className="list-group-item"><b>GCP</b>: The remote server that host our website</li>
                        </ul>
                    </div>

                    <div className="col-lg-4 my-sm-3">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item active">Database</li>
                            <li className="list-group-item"><b>MongoDB</b>: NoSQL Database</li>
                            <li className="list-group-item"><b>MongoDB Java Driver</b>: provide interaction between Java and MongoDB</li>
                            <li className="list-group-item"><b>SODA API</b>: Interacting with Austin Government databases</li>
                            <li className="list-group-item"><b>JSON.Simple</b>: Interraction with JSON objects</li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}


  
export default Stack;
