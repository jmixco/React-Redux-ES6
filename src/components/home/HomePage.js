"use strict";
import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {

        return (
        <div className="jumbotron">
            <h1>Pluralsight Admin</h1>
            <p>React, Redux and React Router ES6 for ultra</p>
            <Link to="about" className="btn btn-primary btn-large">Learn More</Link>
        </div>
        );
    }
}
export default HomePage;