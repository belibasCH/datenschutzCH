import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import Accordion from "../../Accordion";
import { DataContext } from "./../../../DataContext";



const Technisch = ({ update }) => {
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
            <label>Wie lange werden technische Daten aufbewahrt?</label>
            <div className="input-row-group">
                <input type="number"
                    min={0}
                    value={context.data.technischAufbewahrung}
                    onChange={(e) => context.update("technischAufbewahrung")(e.target.value)} />
                <p>Monate</p>
            </div>
        </div>

        <div className="accordion-input">
            <label>Bieten Sie ein öffentliches Wlan an?</label>
            <input
                type="checkbox"
                value={context.data.technischWlan}
                onChange={(e) => context.update("technischWlan")(e.target.checked)} />
        </div>
    </>;

    return (
        <Accordion title="Technische Daten" content={content} status={status ? "green" : "red"} open={false} />
    )
}

export default Technisch;
