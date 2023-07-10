import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import Accordion from "../../Accordion";
import { DataContext } from "../../../DataContext";



const Sonstige = ({ update }) => {
    const context = useContext(DataContext);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (context.data.sonstigeEventsTracing !== 0) {
          setStatus(true);
        }
      }, [context.data]);
    
      useEffect(() => {
        if (status) { update("sonstige")(true); }
        else { update("sonstige")(false) }
      }, [status]);

    const content = <>
        <div className="accordion-input">
            <label>Wie lange werden Besucherdaten von Events aufbewahrt? (z.B. Contact Tracing)</label>
            <div className="input-row-group">
                <input type="number"
                    min={0}
                    placeholder="3"
                    value={context.data.sonstigeEventsTracing}
                    onChange={(e) => context.update("sonstigeEventsTracing")(e.target.value)} />
                <p>Monate</p>
            </div>
        </div>
    </>;

    return (
        <Accordion title="Sonstige Daten" content={content} status={status ? "green" : "red"} open={false} />
    )
}

export default Sonstige;
