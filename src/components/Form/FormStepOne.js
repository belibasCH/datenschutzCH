import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import { DataContext } from "../../DataContext";


const FormStepOne = () => {
  const context = useContext(DataContext);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    let newStatus = 0;
    if (context.data.companyName != '') { newStatus++ }
    if (context.data.url != '') { newStatus++ }
    if (context.data.companyAddress != "") { newStatus++ }
    if (context.data.companyPLZ != "") { newStatus++ }
    if (context.data.companyPlace != "") { newStatus++ }
    setStatus(newStatus);
  }, [context]);

  

  return (
  <div className={status ==5 ? "input-group green" : "input-group red"} >
    <div className={status ==5 ? "stats green" : "stats red"} >{status} von 5</div>
    <div className='stepheading'>
      <h2 >Schritt 1</h2>
      <h3>Beschreibung zu Schritt 1</h3>
    </div>
    <div className='inputgroup'>
      <div className='inputcell'>
        <label htmlFor="companyName">Firmenname</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={context.data.companyName}
          placeholder="Gemäss Handelsregister"
          onChange={(e) => context.update("companyName")(e.target.value)} />
      </div>
      <div className='inputcell'>
        <label htmlFor="url">URL</label>
        <input
          type="text"
          id="url"
          name="url"
          value={context.data.url}
          placeholder="https://"
          onChange={(e) => context.update("url")(e.target.value)} />
      </div>
      <div className='inputcell'>
        <label htmlFor="companyAddress">Adresse</label>
        <input
          type="text"
          id="companyAddress"
          name="companyAddress"
          value={context.data.companyAddress}
          placeholder="Str/Nr"
          onChange={(e) => context.update("companyAddress")(e.target.value)} />
      </div>
      <div className='inputcell'>
        <label htmlFor="companyPLZ">PLZ</label>
        <input
          type="number"
          id="companyPLZ"
          name="companyPLZ"
          value={context.data.companyPLZ}
          placeholder="PLZ"
          onChange={(e) => context.update("companyPLZ")(e.target.value)} />
      </div>
      <div className='inputcell'>
        <label htmlFor="companyPlace">Ort</label>
        <input
          type="text"
          id="companyPlace"
          name="companyPlace"
          value={context.data.companyPlace}
          placeholder="Ort"
          onChange={(e) => context.update("companyPlace")(e.target.value)} />
      </div>
    </div>
    </div>)
}

export default FormStepOne;
