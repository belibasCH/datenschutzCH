import React from "react";
import { DataContext } from "../DataContext";
import { useContext } from "react";

const Eins_WorumGehtEs = () => {
    const context = useContext(DataContext);
    return (
        <div className='datenschutz-element'>
            <h2>1.	Worum geht es in dieser Datenschutzerklärung?</h2>
            <p>Die {context.companyName} (nachstehend auch «wir», «uns») beschafft und bearbeitet Personendaten, die Sie oder auch andere Personen (sog. «Dritte») betreffen. Wir verwenden den Begriff «Daten» hier gleichbedeutend mit «Personendaten» oder «personenbezogene Daten». </p>
            <p>Mit «Personendaten» sind Daten gemeint, die sich auf bestimmte oder bestimmbare Person beziehen, d.h. die Rückschlüsse auf deren Identität sind anhand Daten selbst oder mit entsprechenden Zusatzdaten möglich. «Besonders schützenswerte Personendaten» sind eine Kategorie von Personendaten, die das geltende Datenschutzrecht besonders schützt. Als besonders schützenswerte Personendaten gelten z.B. Daten, aus denen die rassische und ethnische Herkunft hervorgeht, ferner Gesundheitsdaten, Angaben über religiöse oder weltanschauliche Überzeugungen, biometrische Daten zu Identifikationszwecken und Angaben über die Gewerkschaftszugehörigkeit. In Ziff. 3 finden Sie Angaben zu den Daten, die wir im Rahmen dieser Datenschutzerklärung bearbeiten. «Bearbeiten» meint jeden Umgang mit Personendaten, z.B. das Beschaffen, Speichern, Verwenden, Anpassung, Bekanntgeben und Löschen. </p>
            <p>In dieser Datenschutzerklärung beschreiben wir, was wir mit Ihren Daten tun, wenn Sie {context.url}, andere Websites von uns oder unsere Apps verwenden (nachfolgend gesamthaft «Website»), unsere Dienstleistungen oder Produkte beziehen, anderweitig mit uns im Rahmen eines Vertrags in Verbindung stehen, mit uns kommunizieren oder sonst mit uns zu tun haben. Gegebenenfalls werden wir Sie durch eine rechtzeitige schriftliche Mitteilung über zusätzliche, nicht in dieser Datenschutzerklärung erwähnte Bearbeitungsaktivitäten informieren. Zusätzlich können wir Sie über die Bearbeitung Ihrer Daten separat informieren, z.B. in Einwilligungserklärungen, Vertragsbedingungen, zusätzlichen Datenschutzerklärungen, Formularen und Hinweisen.</p>
         </div>
    );
    
};
export default Eins_WorumGehtEs;
