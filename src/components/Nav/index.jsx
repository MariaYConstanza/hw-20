import React from 'react';

const Nav = ({ showAbout, showProjects, showContact, showResume}) => {
    return (
        <ul class="nav justify-content-end" className="nav-tabs" stlye={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
       <li class="nav-item">
          <a class="nav-link" href="#About" onClick={showAbout}>About</a>
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

/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#about" 
          onClick={() => handlePageChange('About')}
          className={showAbout === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
        </li> */