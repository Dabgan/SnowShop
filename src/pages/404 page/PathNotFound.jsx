import React from 'react';
import { Link } from 'react-router-dom';
import { FaSnowman } from 'react-icons/fa';
import './pathNotFound.scss';

const PathNotFound = () => {
    return (
        <div className="container-404">
            <div className="snowman-404">
                <FaSnowman />
            </div>

            <div className="information-404">
                <h1>Oh no! What have you done?</h1>
                <p>Just kidding. Seems like page you are looking for is missing. Don't panic.</p>
                <Link to="/" className="my-btn">
                    Go back to homepage
                </Link>
            </div>
        </div>
    );
};

export default PathNotFound;
