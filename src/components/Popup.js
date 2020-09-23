import React from "react";
import {
  AddCircle,
  Projects,
  DocumentPerformance,
  TableAdd,
} from "grommet-icons";

export default function Popup({ visiblePopup }) {
 
  return (
    <>
      {visiblePopup && (
        <div className="popup">
          <ul className="test__list-icon">
            <li>
              <AddCircle color="plain" size="medium" className="icon" />
              <span>Start new project</span>
            </li>
            <li>
              <Projects color="plain" size="medium" className="icon" />
              <span>Projects</span>
            </li>
            <li>
              <DocumentPerformance
                color="plain"
                size="medium"
                className="icon"
              />
              <span>Dashboard</span>
            </li>
            <li>
              <TableAdd color="plain" size="medium" className="icon" />
              <span>Add new task</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
