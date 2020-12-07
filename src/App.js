import React, { Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { CloudinaryContext } from "cloudinary-react";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import DonationsDetails from "./components/Donations/Details";
import DonationsListView from "./components/Donations/LIstView";
import NonMonetary from "./components/NonMonetary";
import NavBar from "./components/NavBar";

import history from "./history";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <CloudinaryContext
           cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
        >
          <Router history={history}>
            <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about-us" exact component={AboutUs} />
              <Route path="/contact-us" exact component={ContactUs} />
              <Route
                path="/donations/list"
                exact
                component={DonationsListView}
              />
              <Route
                path="/donations/non-monetary"
                exact
                component={NonMonetary}
              />
              <Route path="/donations/:id" exact component={DonationsDetails} />
            </Switch>
          </Router>
        </CloudinaryContext>
      </Fragment>
    );
  }
}

export default App;
