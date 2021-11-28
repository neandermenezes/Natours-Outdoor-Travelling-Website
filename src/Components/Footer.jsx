import React from "react";
import logo from "../img/logo-green-2x.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__logo-box">
          <img src={logo} alt="Full logo" className="footer_logo" />
        </div>
        <div className="footer__flex">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <p className="footer__copyright">
            Built by{" "}
            <a href="#" className="footer__link">
              Neander Menezes
            </a>{" "}
            for his CSS development.
            <p>
              Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use
              this webpage for both personal and commercial use, but NOT to
              claim it as your own design. A credit to the original author,
              Jonas Schmedtmann, is of course highly appreciated!
            </p>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
