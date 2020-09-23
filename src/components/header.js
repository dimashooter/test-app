import React from "react";
import { AppleAppStore, FormSearch } from "grommet-icons";
export default function header() {
  return (
    <div className="header">
      <div className="header__logo">
        <AppleAppStore size="large" />
      </div>
      <div className="header__search">
        <input type="search" placeholder="Search in Project" />
        <FormSearch className="search-icon" />
      </div>
    </div>
  );
}
