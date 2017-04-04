"use strict";
import React from 'react';
import { Link } from 'react-router';

class AboutPage extends React.Component {
    render() {

        return (
        <div className="jumbotron">
            <h1>About</h1>
            <p>This application uses React, Redux and React Router ES6 libraries</p>
            <Link to="about" className="btn btn-primary btn-large">Learn More</Link>
        </div>
        );
    }
}
export default AboutPage;