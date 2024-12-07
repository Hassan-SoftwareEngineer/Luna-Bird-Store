import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn,faServicestack} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faQuestionCircle, faLifeRing, faHouseChimney, faBlog} from '@fortawesome/free-solid-svg-icons';

const Footer = (props) => {
  const footerStyle = props.footer2 ? {} : { marginTop: "1.5%" };

  return (
    <footer className="footer" style={footerStyle}>
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>About Us</h4>
            <p>Luna Birds Store is dedicated to providing high-quality bird products and services. Our mission is to ensure that all birds receive the best care and nutrition possible. We offer a wide range of bird food, cages, toys, and accessories to meet the needs of various bird species.
            </p>
          </div>
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul>
              <li><a href="#" > <FontAwesomeIcon icon={faEnvelope} className='iconStyle'/> Contact Us</a></li>
              <li><a href="#"> <FontAwesomeIcon icon={faQuestionCircle} className='iconStyle' /> FAQs</a></li>
              <li><a href="#"> <FontAwesomeIcon icon={faLifeRing} className='iconStyle' /> Support</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#"> <FontAwesomeIcon icon={faHouseChimney} className='iconStyle' /> Home</a></li>
              <li><a href="#"> <FontAwesomeIcon icon={faServicestack} className='iconStyle' /> Services</a></li>
              <li><a href="#"> <FontAwesomeIcon icon={faBlog} className='iconStyle' /> Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-row">
          <div className="footer-col-full">
            <h4>Follow Us</h4>
            <ul className="footer-social-media">
              <li><a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} className='iconStyle'  /></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className='iconStyle'  /></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className='iconStyle'  /></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className='iconStyle' /></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-row">
          <div className="footer-col-full">
            <p>&copy; 2024 Luna Birds Store. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
