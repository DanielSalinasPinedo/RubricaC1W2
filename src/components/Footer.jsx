import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer bg-light border border-4">
      <div className="footer-content">
        <div className="developer-info border-end border-3">
          <h4 className='text-dark'>Desarrolladores</h4>
          <p className='text-dark'>Sebastian Oliveros</p>
          <p className='text-dark'>soliveros6@cuc.edu.co</p>

          <p className='text-dark'>Daniel Salinas</p>
          <p className='text-dark'>dsalinas@cuc.edu.co</p>
        </div>
        <div className="social-icons border-end border-3">
          <h4 className='text-dark'>Redes Sociales</h4>
          <a className='text-dark' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a className='text-dark' href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className='text-dark' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="app-intent">
          <h4 className='text-dark'>Objetivo de la Aplicación</h4>
          <p className='text-dark'>Esta aplicación tiene como objetivo proporcionar información útil y práctica.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;