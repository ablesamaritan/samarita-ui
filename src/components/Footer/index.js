import React, { Fragment } from "react";

import history from "../../history";
import "./styles.scss";

class Footer extends React.Component {
  render() {
    return (
      <Fragment>
        <footer class="page-footer font-small blue pt-4">
          <div class="container-fluid text-center text-md-left">
            <div class="row">
              <div class="col-md-6 mt-md-0 mt-3">
                <h5 class="text-uppercase">About</h5>
                <p>
                  We are about creating opportunities for ourselves because they
                  are hard to come by and they are limited while there are many
                  of us in need of these opportunities. Help us through your
                  small donations to reduce through fighting for limited
                  opportunities but instead create opportunities for us and for
                  a few others
                </p>
              </div>
              <hr class="clearfix w-100 d-md-none pb-3" />
              <div class="col-md-3 mb-md-0 mb-3">
                <h5 class="text-uppercase">Donations</h5>
                <ul class="list-unstyled">
                  <li
                    className="nav-item"
                    style={{ cursor: "pointer" }}
                    onClick={() => history.push("/donations/list")}
                  >
                    <p className="footer-nav-link">Monetary</p>
                  </li>
                  <li
                    className="nav-item"
                    style={{ cursor: "pointer" }}
                    onClick={() => history.push("/donations/non-monetary")}
                  >
                    <p className="footer-nav-link">Non-Monetary</p>
                  </li>
                </ul>
              </div>
              <div class="col-md-3 mb-md-0 mb-3">
                <h5 class="text-uppercase">Social</h5>

                <ul class="list-unstyled">
                  <li className="nav-item" style={{ cursor: "pointer" }}>
                    <a
                      className="footer-nav-link"
                      href="https://www.facebook.com/able.samaritan.1"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i class="fa fa-facebook social-icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-nav-link"
                      href="#!"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i class="fa fa-twitter social-icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-nav-link"
                      href="https://www.instagram.com/samaritanable/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i class="fa fa-instagram social-icon" />
                    </a>
                  </li>
                  <li>
                    <p>ablesamaritan@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a className="footer-nav-link" href="https://mdbootstrap.com/">
              {" "}
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default Footer;
