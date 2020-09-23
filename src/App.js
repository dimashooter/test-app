import React from "react";
import {
  Clock,
  Projects,
  Info,
  Attachment,
  Inherit,
  Transaction,
  Storage,
} from "grommet-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Add } from "grommet-icons";
import Header from "./components/header";
import Bar from "./components/Bar";

import Test from "./content/Test";
import RecentContent from "./content/RecentContent";

import ArchiveContent from "./content/ArchiveContent";

import Keywords from "./content/Keywords";
import Backlinks from "./content/Backlinks";
import Treemap from "./content/Treemap";
const App = () => {
  return (
    <div>
      <Header />
      <button className="test__btn">
        <Add color="white" className="add" />
        New Project
      </button>
      <div className="test">
        <Bar />
        <div className="test__sidebar">
          <Router>
            <ul className="test__list">
              <li>
                <Link to="/All_project">
                  <Projects
                    color="plain"
                    size="small"
                    className="icon icon-4"
                  />
                  <span>All Project</span>
                </Link>
              </li>
              <li>
                <Link to="/Recent">
                  <Clock color="plain" size="small" className="icon icon-4" />
                  <span>Recent</span>
                </Link>
              </li>

              <li>
                <Link to="/Archive">
                  <Storage color="plain" size="small" className="icon icon-4" />
                  <span>Archive</span>
                </Link>
              </li>
              <li>
                <Link to="/keywords">
                  <Info color="plain" size="small" className="icon icon-4" />
                  <span>Find keywords</span>
                </Link>
              </li>
              <li>
                <Link to="/backlinks">
                  <Attachment color="plain" size="small" className="icon" />
                  <span>Find backlinks</span>
                </Link>
              </li>
              <li>
                <Link to="/treemap">
                  <Inherit color="plain" size="small" className="icon" />
                  <span>Create treemap</span>
                </Link>
              </li>
              <li>
                <Transaction color="plain" size="small" className="icon" />
                <span>Integrations</span>
              </li>
            </ul>
            <Switch>
              <Route path="/All_project">
                <Test />
              </Route>
              <Route path="/Recent">
                <RecentContent />
              </Route>
              <Route path="/Archive">
                <ArchiveContent />
              </Route>
              <Route path="/keywords">
                <Keywords />
              </Route>
              <Route path="/backlinks">
                <Backlinks />
              </Route>
              <Route path="/Treemap">
                <Treemap />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};
export default App;
