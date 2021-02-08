import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ARCamera from "../pages/index.jsx";
import Ambassadors from "../pages/Ambassadors";

const GlobalRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={ARCamera} />
      <Route path="/ambassadors" component={Ambassadors} />
    </Switch>
  </Router>
);

export default GlobalRouter;
