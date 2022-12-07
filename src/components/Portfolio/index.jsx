import React from 'react';

const styles = {
    h1: {
        color: '#a2d2ff',
        marginTop: '2cm',
        marginLeft: '2cm',
    },
    card: {
        width: '18rem',
        marginTop: '2cm',
        marginLeft: '5cm',
    },
    img: {
        width: 300,
        height: 200,
    },
    p: {
        color: '#bde0fe',
    },
};


const Portfolio = () => {
    return (
        <div>
            <h1 style={styles.h1}>Projects</h1>
            <div class="card" style={styles.card}>
                <img src="./assets/surfer_screenshot.png" class="card-img-top" alt="..." style={styles.img}></img>
                <div class="card-body">
                    <a href="https://mariayconstanza.github.io/beach-day/">
                        <p class="card-text" styles={styles.p}>HTML/CSS/JavaScript Project: 1 WOW||Work Over Waves</p>
                    </a>
                </div>
            </div>
            <div class="card" style={styles.card}>
                <img src="./assets/anime-tracker-splash.png" class="card-img-top" alt="..." style={styles.img}></img>
                <div class="card-body">
                    <a href="https://anime-tracker-11-2022.herokuapp.com/">
                        <p class="card-text" styles={styles.p}>Node/MySQL/Express Project: 2 Anime Tracker</p>
                    </a>
                </div>
            </div>
            <div class="card" style={styles.card}>
                <img src="./assets/" class="card-img-top" alt="..." style={styles.img}></img>
                <div class="card-body">
                    <p class="card-text">MERN/ReactJS/State Project: 3 Coming Soon</p>
                </div>
            </div>
        </div>
    );
};


export default Portfolio;