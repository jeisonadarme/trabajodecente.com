import React from "react";
import "./App.css";

/** Router */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/** Pages */
import Home from "./pages/home";
import Login from "./pages/login";

/** redux */

import { Provider } from "react-redux";
import store from "./redux/store";

import {
  transitions,
  positions,
  Provider as AlertProvider,
  types
} from "react-alert";
import AlertTemplate from "react-alert-template-oldschool-dark";

// optional cofiguration
const options = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE,
  timeout: 6000,
  // you can also just use 'scale'
  transition: transitions.SCALE,
  containerStyle: {
    zIndex: 2000
  },
  type: types.INFO
};

function App() {
  return (
    <AlertProvider
      template={AlertTemplate}
      {...options}
      className="react-alert-modal"
    >
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </Provider>
    </AlertProvider>
  );
}

export default App;
