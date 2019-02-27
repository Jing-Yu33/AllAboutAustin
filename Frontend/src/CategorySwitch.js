import React, { Component } from 'react';

class CategorySwitch extends Component {
    render(){
        return(
            <span className="categorySwitch"><a href="https://www.wikipedia.org">Food</a> | <a href="https://facebook.com">Education</a> | <a href="https://reddit.com">Traffic</a></span>
        )
    }
}

export default CategorySwitch;