import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <FontAwesomeIcon icon={faStore} />
          <span>NovaStore</span>
        </div>

        <p>
          Built with React <FontAwesomeIcon icon={faHeart} />
        </p>

        <span>© 2026 NovaStore</span>
      </div>
    </footer>
  );
}

export default Footer;