import React, { Component } from 'react';

class SliderBar extends Component {

    render() {
        return(
            <form action="" method="GET">
                <div className="form-group">
                    <label for="formControlRange">Weight</label>
                    <input type="range" className="form-control-range" id="formControlRange" />
                </div>
            </form>
        )
    }
}
export default SliderBar;

