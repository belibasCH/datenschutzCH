import React, { useContext } from "react";
import { useState } from 'react';
import Accordion from "../../Accordion";



const Technisch = () => {

  const technischeDaten = <><div className="accordion-input">
    <label>Wie lange werden die Daten aufbewahrt?</label>
    <div className="input-row-group">
    <input type="number"></input>
    <p>Monate</p>
    </div>
  </div>
  <div className="accordion-input">
  <label>Bieten Sie ein öffentliches Wlan an?</label>
  <input type="checkbox"></input>
</div>
</>;

  return (
      <Accordion title="Technische Daten" content={technischeDaten} status="green" open={true} />
    )
}

export default Technisch;
