import React from 'react';
import './RecentItem.css';
import Orignals from '../Assets/Orignals.jpg';
const RecentItem = ({ url, title }) => {
    return (
        <div className="item">
            <iframe
                title={title.split(' ')[0]}
                width="400"
                height="235"
                src={url}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <div className="item__details">
                <img className="item__details__img" src={Orignals} alt="Orignal's" />
                <div className="item__detailsText">
                    <h4>{title}</h4>
                    <p>The Orignals</p>
                    <p>Thiller-Fi</p>
                </div>
            </div>
        </div>
    );
};

export default RecentItem;
