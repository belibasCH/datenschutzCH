import React, { useContext } from "react";
import { useState } from 'react';
import { DataContext } from "../../DataContext";
import Accordion from "../Accordion";
import Technisch from "./stepTwo/Technisch";


const FormStepTwo = () => {
  const [data, setData] = useState(useContext(DataContext));

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
    <div className="input-group">
      <div className='stats'>3 von 5</div>
      <div className='stepheading'>
        <h2 >Schritt 2</h2>
        <h3>Informationen zur Datenverarbeitung</h3>
      </div>
      <Technisch/>
      <Accordion title="Registrierungsdaten" content="Inhalt" status="red" open={true} />
      <Accordion title="Kommunikationsdaten" content="Inhalt" status="green" open={true} />
      <Accordion title="Stammdaten" content="Inhalt" status="red" open={true} />
      <Accordion title="Vertragsdaten" content="Inhalt" status="red" open={true} />
      <Accordion title="Verhaltens und Präferenzdaten" content="Inhalt" status="red" open={true} />
      <Accordion title="Sonstige Daten" content="Inhalt" status="red" open={true} />
    </div>)
}

export default FormStepTwo;
