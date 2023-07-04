import React, { useState } from "react";
import "../css/Accordion.css"


const Accordion = content => {
  const [open, setOpen] = useState(true);
  return (
    <div className="accordion">
      <div className="accordion-title">
        <h4>Titel</h4>
        <p>3 von 5</p>
        <div className={open ? "open icon minus-icon": "close icon plus-icon"}></div>
      </div>
      <div>Hallo {content.content}</div>
    </div>


  )
}

export default Accordion;
