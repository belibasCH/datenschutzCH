import React from "react";
import { DataContext } from "../../DataContext";
import { useContext } from "react";

const Matomo = () => {
    const context = useContext(DataContext);
    return (
        <div className='datenschutz-element'>
            <h2>Matomo</h2>
            <p>
            Matomo ist eine Open-Source-Software, 
            die zur Analyse der Besucherströme auf unserer Website eingesetzt wird.
             Matomo setzt Cookies ein, die eine Analyse der Benutzung der Website ermöglichen. 
             Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website 
             werden auf unserem Server gespeichert. Die erfassten Daten umfassen:
            </p>
            <ul>
                <li>IP-Adresse (anonymisiert)</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Aufgerufene Seiten</li>
                <li>Verweildauer auf der Website</li>
                <li>Herkunftsquelle (z.B. Verweiswebsite, Suchmaschine)</li>
                <li>Verwendeter Webbrowser und Betriebssystem</li>
            </ul>
            <div id="matomo-opt-out"></div>
            <script src={context.matomoUrl+ "/index.php?module=CoreAdminHome&action=optOutJS&divId=matomo-opt-out&language=auto&showIntro=1"}></script>
         </div>

    );
};
export default Matomo;
