import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import Accordion from "../../Accordion";
import { DataContext } from "./../../../DataContext";



const Registrierung = ({ update }) => {
  const [data, setData] = useState(useContext(DataContext));
  const [status, setStatus] = useState(false);
  console.log(data)

  useEffect(() => {
    if (data.registrierungAufbewahrung != 0) { setStatus(true); }
  }, [data]);

  useEffect(() => {
    if (status) { update("registrierung")(true); }
    else { update("registrierung")(false) }
  }, [status]);

  const content = <>
  <div className="accordion-input">
    <label>Wie lange werden die Registrierungsdaten aufbewahrt?</label>
    <div className="input-row-group">
    <input type="number"
    min={0}
    value={data.registrierungAufbewahrung}
    onChange={ (e) => setData({ ...data, registrierungAufbewahrung: e.target.value })} />

    <p>Monate</p>
    </div>
  </div>

    <div className="accordion-input">
      <label>Sammeln Sie Daten aus Wettbewerben</label>
      <input
        type="checkbox"
        value={data.registrierungWettbewerbe}
        onChange={(e) => setData({ ...data, registrierungWettbewerbe: e.target.checked })} />
    </div>
    <div className="accordion-input">
      <label>Können sich User auf Ihrer Website einloggen?</label>
      <input
        type="checkbox"
        value={data.registrierungLogin}
        onChange={(e) => setData({ ...data, registrierungLogin: e.target.checked })} />
    </div>
    <div className="accordion-input">
      <label>Sammeln Sie Daten, um Newsletter zu versenden?</label>
      <input
        type="checkbox"
        value={data.registrierungNewsletter}
        onChange={(e) => setData({ ...data, registrierungNewsletter: e.target.checked })} />
    </div>
    <div className="accordion-input">
      <label>Sammeln Sie Daten bei der Einlösung von Gutscheinen?</label>
      <input
        type="checkbox"
        value={data.registrierungGutscheine}
        onChange={(e) => setData({ ...data, registrierungGutscheine: e.target.checked })} />
    </div>
  </>;

  return (
    <Accordion title="Registrierungsdaten" content={content} status={status ? "green" : "red"} open={false} />
  )
}

export default Registrierung;
