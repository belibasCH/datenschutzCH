import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import Accordion from "../../Accordion";
import { DataContext } from "../../../DataContext";



const Kommunikation = ({update}) => {
  const [data, setData] = useState(useContext(DataContext));
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (data.technischAufbewahrung != 0) {setStatus(true);     }
  }, [data]);

  useEffect(() => {
    if (status) {update("kommunikation")(true);}
    else {update("Kommunikation")(false)}
    }, [status]);

  const content = <><div className="accordion-input">
    <label>Wie lange werden die Daten aufbewahrt?</label>
    <div className="input-row-group">
    <input type="number"
    min={0}
    value={data.technischAufbewahrung}
    onChange={ (e) => setData({ ...data, technischAufbewahrung: e.target.value })} />

    <p>Monate</p>
    </div>
  </div>
  <div className="accordion-input">
  <label>Bieten Sie ein öffentliches Wlan an?</label>
  <input type="checkbox"></input>
</div>
</>;

  return (
      <Accordion title="Kommunikationsdaten" content={content} status={status? "green" :"red"} open={false} />
    )
}

export default Kommunikation;
