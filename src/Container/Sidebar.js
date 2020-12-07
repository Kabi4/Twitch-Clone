import React from 'react';
import Channel from '../Components/Channel';
import MoneyHeist from '../Assets/Moneyhiest.jpg';
import Orignals from '../Assets/Orignals.jpg';
import Lucifer from '../Assets/Lucifer.jpg';

import './Sidebar.css';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h5>FOLLOWED CHANNEL</h5>
                <Channel name="Lucifer Morning Star" followers="4.1 M" avatar={Lucifer} />
                <Channel name="Orignals" followers="3.3 M" avatar={Orignals} />
                <h5>RECOMMENDED CHANNEL</h5>
                <Channel name="Money Heist" followers="2.6 M" avatar={MoneyHeist} />
                <p className="sidebar__topshowmore">Show More</p>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__container">
                    <input type="text" placeholder="Search to Add Friends" className="sidebar__search" />
                    <div className="sidebar__logo">
                        <i className="fas fa-search"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
