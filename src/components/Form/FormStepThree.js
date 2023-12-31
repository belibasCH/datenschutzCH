import React , { useContext, useEffect } from "react";
import { useState } from 'react';
import Card from "../Card";
import { DataContext } from "../../DataContext";



const FormStepThree = () => {
  const [status, setStatus] = useState(false);
  const context = useContext(DataContext);

useEffect(() => {
  context.data.CH || context.data.EU || context.data.World ? setStatus(true) : setStatus(false); 
}, [context.data]);



  return (
    <div className={status ? "input-group green" : "input-group red"} >
      <div className={status ? "stats green" : "stats red"} >{status ? "1" : "0"} von 1</div>
      <div className='stepheading'>
        <h2 >Schritt 3</h2>
        <h3>Ort der Datenverarbeitung</h3>
      </div>
      <div className="card-container">
        <Card imageUrl={require('../../assets/flags/swissflag.png')}  action={newStatus => context.update("CH")(newStatus)} title="Schweiz" content={""} />
        <Card imageUrl={require('../../assets/flags/euflag.png')}     action={newStatus => context.update("EU")(newStatus)} title="EU" content={""} />
        <Card imageUrl={require('../../assets/flags/worldflag.png')}  action={newStatus => context.update("World")(newStatus)}  title="World" content={""} />
      </div>
    </div>)
}



export default FormStepThree;
