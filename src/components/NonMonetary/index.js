import React, { Fragment } from "react";

import "./styles.scss";

class NonMonetary extends React.Component {
  render() {
    // const { donation } = this.props;
    return (
      <Fragment>
        <div className="container padded-container">
          <h1 className="padded-header">Non-Monetary Donations</h1>
          <div className="jumbotron">
            <h2>DHL</h2>
            <div className="flex">
              <h4>Shipping Address: </h4>
              <p className="small-p">Address</p>
            </div>
            <h2 className="space-top">Please fill In the form below</h2>
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
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Shipment Tracking Number"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  placeholder="Additional Information"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block btn-donate"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NonMonetary;
