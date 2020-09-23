import React, { useState } from "react";
import Bottom from "./Bottom";
import Li from "./Li";
import Popup from "./Popup";
export default function Bar() {
  const [visiblePopup, setVisiblePopup] = useState(false);

  const items = [
    {
      id: 1,
      icon: (
        <svg
          aria-label="BarChart"
          viewBox="0 0 24 24"
          className="StyledIcon-ofa7kd-0 bzzphA"
        >
          <path
            fill="none"
            stroke="#000"
            strokeWidth="2"
            d="M0,22 L24,22 M22,2 L18,2 L18,18 L22,18 L22,2 Z M6,6 L2,6 L2,18 L6,18 L6,6 Z M14,18 L10,18 L10,10 L14,10 L14,18 Z"
          ></path>
        </svg>
      ),
      name: "Analyse",
      active: false,
    },
    {
      id: 2,
      icon: (
        <svg
          aria-label="Edit"
          viewBox="0 0 24 24"
          className="StyledIcon-ofa7kd-0 bzzphA"
        >
          <path
            fill="none"
            stroke="#000"
            strokeWidth="2"
            d="M14,4 L20,10 L14,4 Z M22.2942268,5.29422684 C22.6840146,5.68401459 22.6812861,6.3187139 22.2864907,6.71350932 L9,20 L2,22 L4,15 L17.2864907,1.71350932 C17.680551,1.319449 18.3127724,1.31277239 18.7057732,1.70577316 L22.2942268,5.29422684 Z M3,19 L5,21 M7,17 L15,9"
          ></path>
        </svg>
      ),
      name: "Create",
      active: false,
    },
    {
      id: 3,
      icon: (
        <svg
          aria-label="Compliance"
          viewBox="0 0 24 24"
          className="StyledIcon-ofa7kd-0 bzzphA"
        >
          <path
            fill="none"
            stroke="#231F20"
            strokeWidth="2"
            d="M8,6 L16,6 L16,1 L8,1 L8,6 L8,6 L8,6 Z M16,3 L21,3 L21,23 L3,23 L3,3 L8,3 M8,14 L11,17 L17,11"
          ></path>
        </svg>
      ),
      name: "Tasks",
      active: true,
    },
  ];

  return (
    <>
      <div className="test__bar">
        <ul className="test__bar--list ">
          {items.map((item) => (
            <Li
              key={item.id + Math.random()}
              id={item.id}
              icon={item.icon}
              name={item.name}
            />
          ))}
          <Popup visiblePopup={visiblePopup} />
        </ul>
        <Bottom />
      </div>
    </>
  );
}
