import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import { DataContext } from "../../DataContext";


const FormStepOne = () => {
  const context = useContext(DataContext);
  const [status, setStatus] = useState(0);
  const [data, setData] = useState(context);

  useEffect(() => {
    let newStatus = 0;
    if (data.companyName != '') { newStatus++ }
    if (data.url != '') { newStatus++ }
    if (data.companyAddress != "") { newStatus++ }
    if (data.companyPLZ != "") { newStatus++ }
    if (data.companyPlace != "") { newStatus++ }
    setStatus(newStatus);
  }, [data]);

  

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
          value={data.companyName}
          placeholder="Gemäss Handelsregister"
          onChange={(e) => context.update("companyName")(e.target.value)} />
      </div>
      <div className='inputcell'>
        <label htmlFor="url">URL</label>
        <input
          type="text"
          id="url"
          name="url"
          value={data.url}
          placeholder="https://"
          onChange={(e) => setData({ ...data, url: e.target.value })} />
      </div>
      <div className='inputcell'>
        <label htmlFor="companyAddress">Adresse</label>
        <input
          type="text"
          id="companyAddress"
          name="companyAddress"
          value={data.companyAddress}
          placeholder="Str/Nr"
          onChange={(e) => setData({ ...data, companyAddress: e.target.value })} />
      </div>
      <div className='inputcell'>
        <label htmlFor="companyPLZ">PLZ</label>
        <input
          type="text"
          id="companyPLZ"
          name="companyPLZ"
          value={data.companyPLZ}
          placeholder="PLZ"
          onChange={(e) => setData({ ...data, companyPLZ: e.target.value })} />
      </div>
      <div className='inputcell'>
        <label htmlFor="companyPlace">Ort</label>
        <input
          type="text"
          id="companyPlace"
          name="companyPlace"
          value={data.companyPlace}
          placeholder="Ort"
          onChange={(e) => setData({ ...data, companyPlace: e.target.value })} />
      </div>
    </div>
    </div>)
}

export default FormStepOne;
