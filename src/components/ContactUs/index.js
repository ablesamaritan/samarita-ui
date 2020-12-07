import React, { Fragment } from "react";

import "./styles.scss";

class ContactUs extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container padded-container">
          <h1 className="padded-header">Contact Us</h1>
          <div className="grid-display">
            {/* <div className="grid-item">
              <form>
                <div className="form-group">
                  <input
                    type="name"
                    className="form-control"
                    id="exampleInputName"
                    placeholder="Your Full Name..."
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Your Email Address..."
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    placeholder="Select Services..."
                  >
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>OPtion 3</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block btn-donate"
                >
                  Submit
                </button>
              </form>
            </div> */}

            <div className="grid-item">
              <h5>
                Address: <small className="text-muted">Mombasa, Kenya</small>
              </h5>
              <h5>
                Email:{" "}
                <small className="text-muted"> ablesamaritan@gmail.com</small>
              </h5>
              <h5>
                Contact: <small className="text-muted">0717586399</small>
              </h5>
              <h5>
                Facebook:{" "}
                <a
                  className=""
                  href="https://www.facebook.com/able.samaritan.1"
                  without
                  rel="noreferrer"
                  target="_blank"
                >
                  <small className="text-muted">Facebook</small>
                </a>
              </h5>
              <h5>
                Twitter:{" "}
                <a
                  className=""
                  href="#!"
                  without
                  rel="noreferrer"
                  target="_blank"
                >
                  <small className="text-muted">Twitter</small>
                </a>
              </h5>

              <h5>
                Instagram:{" "}
                <a
                  className=""
                  href="https://www.instagram.com/samaritanable/"
                  without
                  rel="noreferrer"
                  target="_blank"
                >
                  <small className="text-muted">Instagram</small>
                </a>
              </h5>

              <div className="">
                {/* <img
                  className="img-fluid contact-image"
                  alt="Responsive image"
                  src="https://csds.qld.edu.au/sdc/resources/images/find-us-map.jpg"
                  className="rounded"
                  alt="..."
                /> */}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ContactUs;
