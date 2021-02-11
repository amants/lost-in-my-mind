import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ARCamera from "../pages/ARCamera.jsx";
import Ambassadors from "../pages/Ambassadors";
import WorldMap from "../pages/WorldMap";

const GlobalRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={ARCamera} />
      <Route path="/ambassadeurs" component={Ambassadors} />
      <Route path="/kaart" component={WorldMap} />
    </Switch>
  </Router>
);

export default GlobalRouter;
