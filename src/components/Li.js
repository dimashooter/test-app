import React, { useState } from "react";
import Popup from "./Popup";
export default function Li({ icon, name }) {
  const [visibility, setVisibility] = useState(false);
  const showPopup = () => {
    setVisibility(!visibility);
    setTest(!test);
  };
  const [test, setTest] = useState(false);

  return (
    <>
      <li onClick={() => showPopup()}>
        <div className={!test ? `test__bar--li ` : `test__bar--li active`}>
          <i>{icon}</i>
          <span>{name}</span>
        </div>
        <Popup visiblePopup={visibility} />
      </li>
    </>
  );
}
