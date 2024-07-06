import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
// import { NavLink } from "react-router-dom";


function Footer() {
    return (
      <footer className="footer">

        <div className="footer-extras">
         
          <div className="footer-extra">
            <ul>
              <li>Support</li>
              <li>Getting started</li>
              <li>Help Centre</li>
              <li>Server status</li>
            </ul>
          </div>
          <div className="footer-extra-socials">
            <ul>
              <li>Follow us</li>
              <li className="socials">
                <span>
                  <FaFacebook className="social-logo" />
                </span>
                Facebook
              </li>
              <li className="socials">
                <span>
                  <FaInstagram className="social-logo" />
                </span>
                Instagram
              </li>
              <li className="socials">
                <span>
                  <FaLinkedin className="social-logo" />
                </span>
                LinkedIn
              </li>
            </ul>
            
          </div>
        </div>
        <p className="slide-paragraph">All your building materials in one site for easy quality purchase</p>
      </footer>
    );
  }
  
  export default Footer;