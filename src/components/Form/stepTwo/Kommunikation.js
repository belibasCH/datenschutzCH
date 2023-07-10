import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import Accordion from "../../Accordion";
import { DataContext } from "../../../DataContext";



const Kommunikation = ({ update }) => {
  const context = useContext(DataContext);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (context.data.kommunikationAufbewahrung !== 0
      && context.data.kommunikationAufbewahrungIdentitaet !== 0) {
      setStatus(true);
    }
  }, [context.data]);

  useEffect(() => {
    if (status) { update("kommunikation")(true); }
    else { update("kommunikation")(false) }
  }, [status]);

  const content = <>

    <div className="accordion-input">
      <label>Wie lange werden Identitätsdaten aufbewahrt (ID Kopien etc.)</label>
      <div className="input-row-group">
        <input type="number"
          min={0}
          value={context.data.kommunikationAufbewahrungIdentitaet}
          onChange={(e) => context.update("kommunikationAufbewahrungIdentitaet")(e.target.value)} />
        <p>Jahre</p>
      </div>
    </div>


    <div className="accordion-input">
      <label>Wie lange werden E-Mails und schriftiliche Korrenspondenz aufbewahrt</label>
      <div className="input-row-group">
        <input type="number"
          min={0}
          value={context.data.kommunikationAufbewahrungMail}
          onChange={(e) => context.update("kommunikationAufbewahrungMail")(e.target.value)} />
        <p>Jahre</p>
      </div>
    </div>

    <div className="accordion-input">
      <label>Bieten Sie einen Chat an?</label>
      <input
        type="checkbox"
        value={context.data.kommunikationChat}
        onChange={(e) => context.update("kommunikationChat")(e.target.checked)} />

    </div>
    {context.data.kommunikationChat &&
      <div className="accordion-input">
        <label>Wie lange werden Chat Daten aufbewahrt?</label>
        <div className="input-row-group">
          <input type="number"
            min={0}
            value={context.data.kommunikationAufbewahrungChats}
            onChange={(e) => context.update("kommunikationAufbewahrungChats")(e.target.value)} />
          <p>Monate</p>
        </div>
      </div>}

    <div className="accordion-input">
      <label>Zeichnen Sie gelegentlich Telefon oder Videogespräche auf?</label>
      <input
        type="checkbox"
        value={context.data.kommunikationRecording}
        onChange={(e) => context.update("kommunikationRecording")(e.target.checked)} />
    </div>


    {context.data.kommunikationRecording &&   
 <div className="accordion-input">
 <label>Wie lange werden Video Recordings aufbewahrt?</label>
 <div className="input-row-group">
   <input type="number"
     min={0}
     value={context.data.kommunikationAufbewahrungRecordings}
     onChange={(e) => context.update("kommunikationAufbewahrungRecordings")(e.target.value)} />
   <p>Monate</p>
 </div>
</div>}
  </>
  return (
    <Accordion title="Kommunikationsdaten" content={content} status={status ? "green" : "red"} open={false} />
  )
}

export default Kommunikation;
