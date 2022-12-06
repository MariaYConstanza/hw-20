import React from 'react';

const Nav = ({ showAbout, showProjects, showContact, showResume}) => {
    return (
        <ul className="nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#about" 
          onClick={() => handlePageChange('About')}
          className={showAbout === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects" onClick={showProjects}>Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact" onClick={showContact}>Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#resume" onClick={showResume}>Resume</a>
        </li>
      </ul>
    )
}

export default Nav;