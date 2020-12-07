import React from 'react';
import './Profile.css';
import Orignals from '../Assets/Orignals.jpg';
import RecentItem from './RecentItem';
import VampFic from '../Assets/VampFic.jpg';
import CategoryItem from './CategoryItem';
const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__topleft">
                <img src={Orignals} alt="" />
                <div className="profile__topleft__details">
                    <h1>The Orignals</h1>
                    <h3 style={{ marginTop: '10px', color: 'lightgray' }}>3.3M Followers</h3>
                </div>
            </div>
            <div className="profile__topright">
                <i className="fas fa-heart graybg"></i>
                <i className="fas fa-bell graybg"></i>
                <i className="fas fa-ellipsis-v"></i>
            </div>
            <div className="profile__menu">
                <h2 className="active">Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2>
                    <i className="fas fa-arrow-up"></i>
                </h2>
                <h2>Chat</h2>
            </div>
            <div className="profile__recent">
                <h2 style={{ marginBottom: '20px', marginLeft: '30px' }}>Recent Broadcast</h2>
                <dic className="profile__recentItems">
                    <RecentItem url="https://www.youtube.com/embed/eRduHSr7BYQ" title="Elijah The man Of honors" />
                    <RecentItem
                        url="https://www.youtube.com/embed/fZdzhUfX6Ro"
                        title="Klaus Mikaelson: The Great Evil"
                    />
                    <RecentItem
                        url="https://www.youtube.com/embed/nUxceFOdJjE"
                        title={`Damon Salvatore Tribute | "He's the better man."`}
                    />
                </dic>
                <div className="profile__category">
                    <h2 style={{ marginBottom: '20px', marginLeft: '30px' }}>
                        The Orginals's Recently Streamed Categories
                    </h2>
                    <div className="profile__category__items">
                        <CategoryItem src={VampFic} title="Vampire Fiction" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
