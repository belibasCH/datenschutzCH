import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import Accordion from "../../Accordion";
import { DataContext } from "../../../DataContext";



const Vertrag = ({ update }) => {
    const context = useContext(DataContext);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (context.data.vertragAufbewahrung !== 0) {
          setStatus(true);
        }
      }, [context.data]);
    
      useEffect(() => {
        if (status) { update("vertrag")(true); }
        else { update("vertrag")(false) }
      }, [status]);

    const content = <>
        <div className="accordion-input">
            <label>Wie lange werden Vertragsdaten aufbewahrt?</label>
            <div className="input-row-group">
                <input type="number"
                    min={0}
                    placeholder="10"
                    value={context.data.vertragAufbewahrung}
                    onChange={(e) => context.update("vertragAufbewahrung")(e.target.value)} />
                <p>Jahre</p>
            </div>
        </div>

        <div className="accordion-input">
            <label>Sammeln Sie Reaktionen von Vertragspartnern (z.B. Beschwerden oder Angaben zur Zufriedenheit)</label>
            <input
                type="checkbox"
                value={context.data.vertragReaktionen}
                onChange={(e) => context.update("vertragReaktionen")(e.target.checked)} />
        </div>
    </>;

    return (
        <Accordion title="Vertragsdaten" content={content} status={status ? "green" : "red"} open={false} />
    )
}

export default Vertrag;
