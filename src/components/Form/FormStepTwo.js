import React from "react";
import { useState } from 'react';

import Accordion from "../Accordion";
import Technisch from "./stepTwo/Technisch";
import Registrierung from "./stepTwo/Registrierung";


const FormStepTwo = () => {
  const [status, setStatus] = useState(new Map());

  const updateStatus = (key) => (value) => {
    setStatus(new Map(status.set(key, value)));
  };


  return (
    <div className={[...status.values()].filter(e => e).length ==9 ? "input-group green" : "input-group red"} >
      <div className={status.technisch ? "stats green" : "stats red"} >{[...status.values()].filter(e => e).length} von 9</div>
      <div className='stepheading'>
        <h2 >Schritt 2</h2>
        <h3>Informationen zur Datenverarbeitung</h3>
      </div>
      <Technisch update={updateStatus}/>
      <Registrierung update={updateStatus}/>
        <Accordion title="Registrierungsdaten" content="Inhalt" status="red" open={true} />
        <Accordion title="Kommunikationsdaten" content="Inhalt" status="green" open={true} />
        <Accordion title="Stammdaten" content="Inhalt" status="red" open={true} />
        <Accordion title="Vertragsdaten" content="Inhalt" status="red" open={true} />
        <Accordion title="Verhaltens und Präferenzdaten" content="Inhalt" status="red" open={true} />
        <Accordion title="Sonstige Daten" content="Inhalt" status="red" open={true} />
    </div>)
}

export default FormStepTwo;
