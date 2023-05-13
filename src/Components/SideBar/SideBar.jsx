import React, { useState } from "react";
import "./SideBar.css";

const SideBar = (props) => {
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

  const [listOpen, setListOpen] = useState(false)

  return (
    <div className="sidebar">
      <img src="./assets/add.svg" alt="add" onClick={() => setListOpen(!listOpen)}/>
      <ul className={`sidebar_list ${listOpen?"sidebar_list_active":""}`}>
        {colors.map((item, index) => {
          return (
            <li
              key={index}
              className="sidebar_list_item"
              style={{ backgroundColor: item }}
              onClick={()=>props.addNote(item)}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
