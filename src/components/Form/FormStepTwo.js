import React from "react";
import { useState } from 'react';

import Accordion from "../Accordion";
import Technisch from "./stepTwo/Technisch";
import Registrierung from "./stepTwo/Registrierung";
import Kommunikation from "./stepTwo/Kommunikation";
import Stamm from "./stepTwo/Stamm";
import Vertrag from "./stepTwo/Vertrag";
import Verhalten from "./stepTwo/Verhalten";
import Sonstige from "./stepTwo/Sonstige";


const FormStepTwo = () => {
  const [status, setStatus] = useState(new Map());

  const updateStatus = (key) => (value) => {
    setStatus(new Map(status.set(key, value)));
  };


  return (
    <div className={[...status.values()].filter(e => e).length ==7 ? "input-group green" : "input-group red"} >
      <div className={status.technisch ? "stats green" : "stats red"} >{[...status.values()].filter(e => e).length} von 7</div>
      <div className='stepheading'>
        <h2 >Schritt 2</h2>
        <h3>Informationen zur Datenverarbeitung</h3>
      </div>
      <Technisch update={updateStatus}/>
      <Registrierung update={updateStatus}/>
      <Kommunikation update={updateStatus}/>
      <Stamm update={updateStatus}/>
      <Vertrag update={updateStatus}/>
      <Verhalten update={updateStatus}/>
      <Sonstige update={updateStatus}/>
    </div>)
}

export default FormStepTwo;
