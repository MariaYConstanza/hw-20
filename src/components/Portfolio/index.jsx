import React from 'react';

const cardStyle = {
    width: '18rem',
    marginTop: '2cm',
    marginLeft: '5cm',
};
const imgStyle = {
    width: 300,
    height: 200,
}

const Portfolio = () => {
    return (
        <div>
            <h1>Projects</h1>
            <div class="card" style={cardStyle}>
                <img src="./public/surfer_screenshot.png" class="card-img-top" alt="..." style={imgStyle}></img>
                <div class="card-body">
                    <p class="card-text">HTML/CSS/JavaScript Project: 1 WOW</p>
                </div>
            </div>
            <div class="card" style={cardStyle}>
                <img src="./public/anime-tracker-splash.png" class="card-img-top" alt="..." style={imgStyle}></img>
                <div class="card-body">
                    <p class="card-text">NodeJS/MySQL/ExpressJS Project: 2 Anime Tracker</p>
                </div>
            </div>
        </div>
    );
};


export default Portfolio;