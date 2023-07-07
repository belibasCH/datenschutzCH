import React from "react";

const CopyBanner = ({ status }) => {
    console.log(status);
    const getPolicy = () => {
        const container = document.getElementById('datenschutz-document');
        navigator.clipboard.writeText(container.innerHTML);
        alert("Ihre Datenschutzerklärung wurde in die Zwischenablage kopiert. Sie können den HTML Inhalt nun auf ihrer Website einfügen");
    }

    return (
        <div className={status ? "copy-banner green" : "copy-banner red"}>
            {!status && <> 
            <h2>Fast geschafft!</h2>
            <p>Füllen Sie das Formular auf der rechten Seite vollständig aus</p>
            </>}
            {status && <> 
            <h2>Ready to go!</h2>
            <p>Füllen Sie das Formular auf der rechten Seite vollständig aus</p>
            <button onClick={getPolicy}>Jetzt kopieren</button>
            </>}

        </div>

    )
        ;
};
export default CopyBanner;


