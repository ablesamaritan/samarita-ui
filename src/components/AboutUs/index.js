import React, { Fragment } from "react";

// import history from "../../history";

import "./styles.scss";
class AboutUs extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container padded-container">
          <h1 className="padded-header">About Us</h1>
          <div className="container">
            <div className="">
              {/* <div className="icon-flex">
                <span className="fa fa-group avatar"></span>
              </div> */}
              <p className="lead bold">
                Able Samaritan is about asking for help from able people like
                you rather than giving up and engaging in illegal activities
                when faced with challenges and difficulties such as unemployment
                coupled with the global pandemic in Africa and the world. With
                Us being third world countries the youths are hit hard therefore
                it is only responsible to try to be part of the solution and to
                do what we need to finance and that is why at Able Samaritan we
                are asking for donations in terms of money or items such as
                laptops, cameras, phones, computers, printers, others we can use
                wisely
              </p>
              <p className="lead bold">
                We are about creating opportunities for ourselves because they
                are hard to come by and they are limited while there are many of
                us in need of these opportunities. Help us through your small
                donations to reduce through fighting for limited opportunities
                but instead create opportunities for us and for a few others
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AboutUs;
