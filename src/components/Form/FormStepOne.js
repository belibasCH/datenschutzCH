import React, { useContext } from "react";
import { useState } from 'react';
import { DataContext } from "../../DataContext";
import Accordion from "../Accordion";


const FormStepOne = () => {
  const [data, setData] = useState(useContext(DataContext));
  console.log(data);


  return (
  <div className="input-group">
    <div className='stats'>3 von 5</div>
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
          onChange={(e) => setData({ ...data, companyName: e.target.value })} />
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
          value={data.companyPlace}
          placeholder="PLZ"
          onChange={(e) => setData({ ...data, companyAddress: e.target.value })} />
      </div>
      <div className='inputcell'>
        <label htmlFor="companyPLZ">Ort</label>
        <input
          type="text"
          id="companyPLZ"
          name="companyPLZ"
          value={data.companyPlace}
          placeholder="Ort"
          onChange={(e) => setData({ ...data, companyAddress: e.target.value })} />
      </div>
    </div>
    </div>)
}

export default FormStepOne;
