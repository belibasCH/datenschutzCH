import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import Accordion from "../../Accordion";
import { DataContext } from "../../../DataContext";



const Stamm = ({ update }) => {
    const context = useContext(DataContext);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (context.data.technischAufbewahrung !== 0) {
            setStatus(true);
            update("technisch")(true);
        }
        else { update("technisch")(false) }
    }, [context.data]);

    const content = <>
        <div className="accordion-input">
            <label>Wie lange werden Stammdaten aufbewahrt?</label>
            <div className="input-row-group">
                <input type="number"
                    min={0}
                    placeholder="10"
                    value={context.data.stammAufbewahrung}
                    onChange={(e) => context.update("stammAufbewahrung")(e.target.value)} />
                <p>Jahre</p>
            </div>
        </div>

        <div className="accordion-input">
            <label>Nutzen Sie Stammdaten für die Versendung von Einladungen für Events?</label>
            <input
                type="checkbox"
                value={context.data.stammEvents}
                onChange={(e) => context.update("stammEvents")(e.target.checked)} />
        </div>
        <div className="accordion-input">
            <label>Nutzen Sie Stammdaten für die Versendung von Gutscheinen</label>
            <input
                type="checkbox"
                value={context.data.stammGutscheine}
                onChange={(e) => context.update("stammGutscheine")(e.target.checked)} />
        </div>
        <div className="accordion-input">
            <label>Nutzen Sie Stammdaten für die Versendung von Newsletter</label>
            <input
                type="checkbox"
                value={context.data.stammNewsletter}
                onChange={(e) => context.update("stammNewsletter")(e.target.checked)} />
        </div>
    </>;

    return (
        <Accordion title="Stammdaten" content={content} status={status ? "green" : "red"} open={false} />
    )
}

export default Stamm;
