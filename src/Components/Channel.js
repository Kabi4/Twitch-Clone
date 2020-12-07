import React from 'react';
import './Channel.css';
const Channel = ({ avatar, name, followers }) => {
    return (
        <div className="channel">
            <div className="channel_description">
                <img alt={name?.split(' ')[0] + "'s channel"} src={avatar} />
                <p>{name}</p>
            </div>
            <p style={{ width: '80px' }}>
                <span style={{ color: '#800000' }}>🔴</span> {followers}
            </p>
        </div>
    );
};

export default Channel;
