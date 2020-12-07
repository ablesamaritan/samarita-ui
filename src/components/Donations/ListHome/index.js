import React, { Fragment } from "react";
import { connect } from "react-redux";

import { getDonations } from "../../../actions";
import history from "../../../history";
import "./styles.scss";

class List extends React.Component {
  componentDidMount() {
    this.props.getDonations();
  }

  renderDonationsList = () => {
    const { donations } = this.props;
    let newDonations = donations && donations.length > 5 ? donations.slice(0, 6) : donations
    return (
      donations &&
      newDonations.map((donation) => {
        return (
          <div className="card card-item shadow" key={donation.id}>
            <div className="center">
              <div
                className="avatar"
                style={{ backgroundImage: `url(${donation.image})` }}
              >
                {/* <img
                  className="card-img-top"
                  src={donation.image}
                  alt={donation.image}
                /> */}
              </div>
            </div>
            <div className="card-body">
              <h4 className="card-title center">{donation.name}</h4>
              {/* <p className="card-text">Current Amount: {donation.currentAmount}</p>
              <p className="card-text">Target Amount: {donation.target}</p> */}
              <div className="center">
                <button
                  className="btn btn-primary btn-donate"
                  onClick={() => history.push(`/donations/${donation.id}`)}
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        );
      })
    );
  };

  render() {
    return (
      <Fragment>
        <div className="card-grid">{this.renderDonationsList()}</div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const Donations = Object.values(state.donations);
  return {
    donations: Donations.filter((a) => a.id),
  };
};

export default connect(mapStateToProps, { getDonations })(List);
