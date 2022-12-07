import React from 'react';

const styles = {
    h1: {
        color: '#a2d2ff',
        marginTop: '2cm',
        marginLeft: '2cm',
    },
    p: {
        color: '#a2d2ff',
        marginTop: '1cm',
        marginLeft: '4cm',
    },
};

const About = () => {
    return (
        <div className='about-body'>
            <h1 style={styles.h1}>About Me</h1>
            <p style={styles.p}>
                Certified UCF Full-Stack bootcamp student, a web developer in the rising!
            </p>
        </div>
    );
};

export default About;