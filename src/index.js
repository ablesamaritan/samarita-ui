import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import App from "./App";
import reducers from "./reducers";

const composedEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composedEnhancers(applyMiddleware(thunk)));

ReactDom.render(
  <Provider store={store}>
    <PayPalScriptProvider
          options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID}}
        >
    <App />
    </PayPalScriptProvider>
  </Provider>,
  document.querySelector("#root")
);
