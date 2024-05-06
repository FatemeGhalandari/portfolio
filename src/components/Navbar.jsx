import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <a href="/">
          <span>Fateme Ghalandari</span>
        </a>
        <ul className="socials">
          <a href="https://www.linkedin.com/in/fghalandarii/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/FatemeGhalandari">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://twitter.com/fghalandarii">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="mailto:fghalandarii@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;