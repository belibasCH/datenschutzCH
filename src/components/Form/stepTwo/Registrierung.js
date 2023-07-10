import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import Accordion from "../../Accordion";
import { DataContext } from "./../../../DataContext";



const Registrierung = ({ update }) => {
  const context = useContext(DataContext);
  const [status, setStatus] = useState(false);

  console.log(context.data)

  useEffect(() => {
    if (context.data.registrierungAufbewahrung !== 0) { setStatus(true); }
  }, [context.data]);

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
    value={context.data.registrierungAufbewahrung}
    onChange={(e) => context.update("registrierungAufbewahrung")(e.target.value)} />
    <p>Monate</p>
    </div>
  </div>

    <div className="accordion-input">
      <label>Sammeln Sie Daten aus Wettbewerben</label>
      <input
        type="checkbox"
        value={context.data.registrierungWettbewerbe}
        onChange={(e) => context.update("registrierungWettbewerbe")(e.target.checked)} />
    </div>
    <div className="accordion-input">
      <label>Können sich User auf Ihrer Website einloggen?</label>
      <input
        type="checkbox"
        value={context.data.registrierungLogin}
        onChange={(e) => context.update("registrierungLogin")(e.target.checked)} />
    </div>
    <div className="accordion-input">
      <label>Sammeln Sie Daten, um Newsletter zu versenden?</label>
      <input
        type="checkbox"
        value={context.data.registrierungNewsletter}
        onChange={(e) => context.update("registrierungNewsletter")(e.target.checked)} />
    </div>
    <div className="accordion-input">
      <label>Sammeln Sie Daten bei der Einlösung von Gutscheinen?</label>
      <input
        type="checkbox"
        value={context.data.registrierungGutscheine}
        onChange={(e) => context.update("registrierungGutscheine")(e.target.checked)} />
    </div>
  </>;

  return (
    <Accordion title="Registrierungsdaten" content={content} status={status ? "green" : "red"} open={false} />
  )
}

export default Registrierung;
