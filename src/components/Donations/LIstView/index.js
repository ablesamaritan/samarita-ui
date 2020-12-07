import React, { Fragment } from "react";

import DonationsList from "../List";
import "./styles.scss";

class ListView extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container padded-container">
          <h1 className="padded-header">Donations List View</h1>
          <DonationsList />
        </div>
      </Fragment>
    );
  }
}

export default ListView;
