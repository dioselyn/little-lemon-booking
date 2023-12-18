import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import NavLinks from "../mock/NavLinks";
import { Link } from "react-router-dom";

const contacts = [
  { icon: faLocationDot, info: "678 Pisa Ave, Chicago, IL 60611" },
  { icon: faPhone, info: "(312) 593-2744" },
  { icon: faEnvelope, info: "customer@littlelemon.com" },
];

const socials = [
  { icon: faFacebook, name: "facebook" },
  { icon: faTwitter, name: "twitter" },
  { icon: faInstagram, name: "instagram" },
  { icon: faYoutube, name: "youtube" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <img
          className="footer__logo"
          src="/img/logo-white.png"
          alt="Little Lemon"
        />
        <nav className="footer__nav">
          <h4>Sitemap</h4>
          <ul>
            {NavLinks.map((navLink, index) => (
              <li key={index}>
                <Link to={navLink.href}>{navLink.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__contact">
          <h4>Contact us</h4>

          <address>
            {contacts.map((contact, index) => (
              <p key={index}>
                <FontAwesomeIcon icon={contact.icon} /> {contact.info}
              </p>
            ))}
          </address>
        </div>

        <div className="footer__social">
          <h4>Connect with us</h4>
          {socials.map((social, index) => (
            <Link key={index} to={`https://www.${social.name}.com`}>
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
