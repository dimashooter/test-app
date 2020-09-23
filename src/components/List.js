import React from "react";
import Test from "../content/Test";
import RecentContent from "../content/RecentContent";
import {
  Projects,
  Info,
  Attachment,
  Inherit,
  Transaction,
  Clock,
  Folder,
} from "grommet-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ArchiveContent from "../content/ArchiveContent";
export default function List() {
  return (
    <div className="test__sidebar">
      <Router>
        <ul className="test__list">
          <li>
            <Link to="/All_project">
              <Projects color="plain" size="small" className="icon" />
              <span>All Projects</span>
            </Link>
          </li>
          <li>
            <Link to="/Recent">
              <Clock color="plain" size="small" className="icon" />
              <span>Recent</span>
            </Link>
          </li>
          <li>
            <Link to="/Archive">
              <Folder color="plain" size="small" className="icon" />
              <span>Archive</span>
            </Link>
          </li>
          <li>
            <Info color="plain" size="small" className="icon icon-4" />
            <span>Find keywords</span>
          </li>
          <li>
            <Attachment color="plain" size="small" className="icon" />
            <span>Find backlinks</span>
          </li>
          <li>
            <Inherit color="plain" size="small" className="icon" />
            <span>Create treemap</span>
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
          <Route path="/All_project">
            <Test />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
