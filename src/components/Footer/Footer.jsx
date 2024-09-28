import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div class="social-icons">
        <h4>Follow:</h4>
        <a href="/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="/" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <p>Copyright &copy; 2024 by @jmsptrick_ | All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
