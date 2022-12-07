import React from 'react';

const styles = {
  nav: {
    color: '#bde0fe',
  },
};

const Nav = ({ showAbout, showProjects, showContact, showResume}) => {
    return (
      <div className='nav-bar'>
        <ul class="nav justify-content-end" stlye={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
       <li class="nav-item about">
          <a class="nav-link" href="#About" onClick={showAbout} style={styles.nav}>About</a>
        </li>
        <li class="nav-item projects">
          <a class="nav-link" href="#projects" onClick={showProjects} style={styles.nav}>Projects</a>
        </li>
        <li class="nav-item contact">
          <a class="nav-link" href="#contact" onClick={showContact} style={styles.nav}>Contact</a>
        </li>
        <li class="nav-item resume">
          <a class="nav-link" href="#resume" onClick={showResume} style={styles.nav}>Resume</a>
        </li>
      </ul>
      </div>
    );
};

export default Nav;

/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#about" 
          onClick={() => handlePageChange('About')}
          className={showAbout === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
        </li> */