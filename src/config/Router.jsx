import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ARCamera from "../pages/ARCamera.jsx";
import Ambassadors from "../pages/Ambassadors";
import AmbassadorMap from "../pages/AmbassadorMap";

const GlobalRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={ARCamera} />
      <Route path="/ambassadeurs" component={Ambassadors} />
      <Route path="/kaart" component={AmbassadorMap} />
    </Switch>
  </Router>
);

export default GlobalRouter;
