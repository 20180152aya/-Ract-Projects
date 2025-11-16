import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-black text-white text-center p-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <h6 className="fw-bold">GET IN TOUCH</h6>

            <p className="mb-2">
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                className="footer-icon"
              />
              Github
            </p>

            <p className="mb-0">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                className="footer-icon"
              />
              LinkedIn
            </p>
          </div>

          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <button className="btn btn-outline-light px-4 py-2">
              About Me
            </button>
          </div>

          <div className="col-12 col-md-4">
            <div className="mb-2">
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className="footer-icon"
              />
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                className="footer-icon"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                size="lg"
                className="footer-icon"
              />
            </div>

            <p className="mb-0 text-white-50" style={{ fontSize: "14px" }}>
              &copy; 2024 My Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
