import React, { useState } from "react";
import "../css/Accordion.css"


const Accordion = ({title, content, status, open}) => {
  const [openState, setOpenState] = useState(open);
  const changestate = () => {
    setOpenState(!openState);
  }
  return (
    <div className="accordion" >
      <div className="accordion-title" onClick={changestate}>
        <h4>{title}</h4>
        <div className="accordion-right">
        <div className={`status ${status}`}></div>
        <div className={openState ? "open icon minus-icon": "close icon plus-icon"} onClick={changestate}></div>
        </div>
      </div>
      <div className={openState ? "open accordion-content": "close accordion-content"}>{content}</div>
    </div>


  )
}

export default Accordion;
