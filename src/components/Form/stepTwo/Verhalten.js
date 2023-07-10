import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import Accordion from "../../Accordion";
import { DataContext } from "../../../DataContext";



const Verhalten = ({ update }) => {
    const context = useContext(DataContext);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (context.data.verhaltenAufbewahrung !== 0) {
          setStatus(true);
        }
      }, [context.data]);
    
      useEffect(() => {
        if (status) { update("verhalten")(true); }
        else { update("verhalten")(false) }
      }, [status]);

    const content = <>
        <div className="accordion-input">
            <label>Wie lange werden Produkt- und Dienstleistungspräferenzen von Kunden aufbewahrt?</label>
            <div className="input-row-group">
                <input type="number"
                    min={0}
                    placeholder="24"
                    value={context.data.verhaltenAufbewahrung}
                    onChange={(e) => context.update("verhaltenAufbewahrung")(e.target.value)} />
                <p>Monate</p>
            </div>
        </div>

        <div className="accordion-input">
            <label>Ermitteln Sie Bewegungsprofile? (z.B über Smartphone)</label>
            <input
                type="checkbox"
                value={context.data.verhaltenBewegungsprofil}
                onChange={(e) => context.update("verhaltenBewegungsprofil")(e.target.checked)} />
        </div>

        {context.data.verhaltenBewegungsprofil &&
         <div className="accordion-input">
         <label>Wie lange werden Bewegungsdaten von Kunden aufbewahrt?</label>
         <div className="input-row-group">
             <input type="number"
                 min={0}
                 placeholder="2-3"
                 value={context.data.verhaltenAufbewahrungBewegung}
                 onChange={(e) => context.update("verhaltenAufbewahrungBewegung")(e.target.value)} />
             <p>Wochen</p>
         </div>
     </div>
        
        }
    </>;

    return (
        <Accordion title="Verhaltens- und Präferenzdaten" content={content} status={status ? "green" : "red"} open={false} />
    )
}

export default Verhalten;
