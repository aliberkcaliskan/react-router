import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/index.tsx'

createRoot(document.getElementById("root")).render(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </Router>
);