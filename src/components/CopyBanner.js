import React from "react";

const CopyBanner = (data) => {
    const getPolicy = () => {
        const container = document.getElementById('datenschutz-document');
        navigator.clipboard.writeText(container.innerHTML);
        alert("Ihre Datenschutzerklärung wurde in die Zwischenablage kopiert. Sie können den HTML Inhalt nun auf ihrer Website einfügen");
    }
    return (
        <div className={data.data.status.filter(Boolean).length == data.data.status.length ? "copy-banner green"  : "copy-banner red"}>
        <p>{data.data.status.filter(Boolean).length} von {data.data.status.length}</p>
        <button onClick={getPolicy}>Jetzt kopieren</button>
    </div>
    );
    
};
export default CopyBanner;


