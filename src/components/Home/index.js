import React, { Fragment } from "react";

import DonationsList from "../Donations/ListHome";
import Footer from "../Footer";
import history from "../../history";
import "./styles.scss";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container padded-container">
          <h1 className="padded-header">Home</h1>
          <div className="jumbotron">
            <h2>Welcome to Able Samaritan</h2>
            <h6 className="spaced-letters spaced-lines">
              If you are here, it's because you are able and we are and we are asking
              for a small donation that will not affect you financially but will
              impact us and many others positively by providing us with
              opportunities that we cannot find during these challenging times
              or even during "good times" because of how limited these
              opportunities are, your donations will highly be appreciated with
              a thankful heart and a smile and during PROJECT APPRECIATION we
              will honour your contributions and donations
            </h6>
          </div>
          <h2 className="padded-sub-header">Non-Monetary Donations</h2>
          <div className="jumbotron dhl-background">
            {/* <h2>Welcome Content</h2>
            <p>Welcome Content description</p> */}
            <div className="right">
              <button
                className="btn btn-primary"
                onClick={() => history.push("/donations/non-monetary")}
              >
                Donate
              </button>
            </div>
          </div>
          <h2 className="padded-sub-header">Monetary Donations</h2>
          <DonationsList />
          <div className="center padded-top">
            <button
              className="btn btn-primary"
              onClick={() => history.push("/donations/list")}
            >
              View More
            </button>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
