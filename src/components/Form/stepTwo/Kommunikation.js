import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import Accordion from "../../Accordion";
import { DataContext } from "../../../DataContext";



const Kommunikation = ({ update }) => {
  const [data, setData] = useState(useContext(DataContext));
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (data.kommunikationAufbewahrung != 0
    && data.kommunikationAufbewahrungIdentität != 0) { 
        setStatus(true); }
  }, [data]);

  useEffect(() => {
    if (status) { update("kommunikation")(true); }
    else { update("Kommunikation")(false) }
  }, [status]);

  const content = <>
    <div className="accordion-input">
      <label>Bieten Sie einen Chat an?</label>
      <input
        type="checkbox"
        value={data.kommunikationChat}
        onChange={(e) => setData({ ...data, kommunikationChat: e.target.checked })} />
    </div>

    <div className="accordion-input">
      <label>Zeichnen Sie gelegentlich Telefon oder Videogespräche auf?</label>
      <input
        type="checkbox"
        value={data.kommunikationChat}
        onChange={(e) => setData({ ...data, kommunikationChat: e.target.checked })} />
    </div>

    <div className="accordion-input">
      <label>Wie lange werden Identitätsdaten aufbewahrt (ID Kopien etc.)</label>
      <div className="input-row-group">
        <input type="number"
          min={0}
          value={data.technischAufbewahrung}
          onChange={(e) => setData({ ...data, technischAufbewahrung: e.target.value })} />

        <p>Monate</p>
      </div>
    </div>
  </>;

  return (
    <Accordion title="Kommunikationsdaten" content={content} status={status ? "green" : "red"} open={false} />
  )
}

export default Kommunikation;
