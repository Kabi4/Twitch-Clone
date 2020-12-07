import React from 'react';
import './Stream.css';
const Stream = () => {
    return (
        <div className="stream">
            <div className="stream__container">
                <div className="stream__status">
                    <div className="stream__status__contianer">
                        <div className="stream__status__container__top">
                            <div className="stream__statusIndicator">OFFLINE</div>
                            <h2>Check out the below streams form The Orignals</h2>
                        </div>
                        <div className="stream__status__container__bottom">
                            <i className="fas fa-bell"></i>
                            <p>You will be notified when The Oringnals is live!</p>
                        </div>
                    </div>
                </div>
                <div className="stream__vediosEmbed">
                    <iframe
                        title={'LiVE'}
                        width="500"
                        height="295"
                        src="https://www.youtube.com/embed/pNP33ePc-OQ"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>{' '}
                </div>
            </div>
        </div>
    );
};

export default Stream;
