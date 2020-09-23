import { User } from "grommet-icons";
import React, { useState } from "react";

export default function Bottom() {
  const [show, setShow] = useState(false);
  const showUser = () => {
    setShow(!show);
  };
  return (
    <div className="userBlock" onClick={() => showUser()}>
      <User color="plain" size="medium" className="icon" />
      {show && <UserPopup />}
    </div>
  );
}
const UserPopup = () => {
  return (
    <div className="userPopup">
      <div className="popup--header">
        <User color="plain" size="medium" className="icon" />
        <h3>John Kiwiseed</h3>
      </div>
      <div className="userInfo">
        <span>PRO</span>
        <p>johnkiwiseed.com</p>
      </div>

      <ul className="popup-content">
        <li>Account</li>
        <li>Upgrade</li>
        <li>Support</li>
        <li>Privacy</li>
        <li>Terms & Conditions</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};
