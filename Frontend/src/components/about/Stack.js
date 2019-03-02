import React from 'react';

class Stack extends React.Component {
    
    render() {
        return (            
            <div className="jumbotron">
                <h3 className="display-4">Tools</h3>
                <div class="row">
                    <div class="col-lg-4 my-sm-3">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item active">FrontEnd</li>
                            <li class="list-group-item"><b>React</b>: JavaScript Library for design UI</li>
                            <li class="list-group-item"><b>Bootstrap</b>: CSS Library for styling</li>
                            <li class="list-group-item"><b>Mocha</b>: A testing tool for JavaScript</li>
                            <li class="list-group-item"><b>NPM</b>: Node Package Manager for JavaScript (React)</li>
                        </ul>
                    </div>
{/*
                    <div class="col-lg-4 my-sm-3">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item active">BackEnd</li>
                            <li class="list-group-item"><b>...</b>: ...</li>
                            <li class="list-group-item"><b>...</b>: ...</li>
                            <li class="list-group-item"><b>...</b>: ...</li>
                        </ul>
                    </div>
*/}
                    <div class="col-lg-4 my-sm-3">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item active">Back End / Database</li>
                            <li class="list-group-item"><b>MongoDB</b>: NoSQL Database</li>
                            <li class="list-group-item"><b>MongoDB Java Driver</b>: provide interaction between Java and MongoDB</li>
                            <li class="list-group-item"><b>SODA API</b>: Interacting with Austin Government databases</li>
                            <li class="list-group-item"><b>JSON.Simple</b>: Interraction with JSON objects</li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}


  
export default Stack;
