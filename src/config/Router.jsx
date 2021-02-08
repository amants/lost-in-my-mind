import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ARCamera from "../pages";
import Ambassadors from "../pages/Ambassadors";

const GlobalRouter = () => (
  <Router>
    <Switch>
      <Route path="/" component={ARCamera} />
      <Route path="/ambassadors" component={Ambassadors} />
    </Switch>
  </Router>
);

export default GlobalRouter;
