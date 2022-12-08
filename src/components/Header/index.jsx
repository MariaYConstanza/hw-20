import React from 'react';

const styles = {
    h1: {
        color: '#cdb4db',
        marginLeft: '-6cm',
    },
    p: {
        color: '#cdb4db',
        marginLeft: '-6cm',
    },
};

const Header = () => {
    return (
        <div class="jumbotron jumbotron-fluid" id="banner">
            <div class="container">
                <h1 class="display-4" style={styles.h1}>Maria Constanza</h1>
                <p class="lead" style={styles.p}>Personal Portfolio</p>
            </div>
        </div>
    );
};

export default Header;