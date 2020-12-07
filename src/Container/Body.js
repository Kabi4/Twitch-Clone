import React from 'react';
import Profile from '../Components/Profile';
import './Body.css';
import Stream from './Stream';
const Body = () => {
    return (
        <div className="body">
            <div className="body__left">
                <Stream />
                <hr></hr>
                <Profile />
            </div>
            <div className="body__right"></div>
        </div>
    );
};

export default Body;
