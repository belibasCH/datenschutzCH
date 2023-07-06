import React from "react";
import { useState } from 'react';
import Card from "../Card";


const FormStepThree = () => {
  const [status, setStatus] = useState(false);

  return (
    <div className={status ? "input-group green" : "input-group red"} >
      <div className={status ? "stats green" : "stats red"} >{status ? "1" : "0"} von 1</div>
      <div className='stepheading'>
        <h2 >Schritt 3</h2>
        <h3>Ort der Datenverarbeitung</h3>
      </div>
      <div className="card-container">
        <Card imageUrl={require('../../assets/flags/swissflag.png')} action={() => console.log("TBD")} title="Schweiz" content={""} />
        <Card imageUrl={require('../../assets/flags/euflag.png')} action={() => console.log("TBD")} title="EU" content={""} />
        <Card imageUrl={require('../../assets/flags/worldflag.png')} action={() => console.log("TBD")} title="World" content={""} />
      </div>
    </div>)
}

export default FormStepThree;
