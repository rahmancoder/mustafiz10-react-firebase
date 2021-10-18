import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center">
            <h1>Page Not Found</h1>
            <p><Link to="/home">Back To Home Page</Link></p>
        </div>
    );
};

export default NotFound;