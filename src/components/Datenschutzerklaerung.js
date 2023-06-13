import React from "react";
import { DataContext } from "../DataContext";
import { useContext } from "react";

const Datenschutzerklarung = () => {
    const context = useContext(DataContext);
    return (
        <div className='dataenschutz-container'>
            <h3>Datenschutzerklärung</h3>
            {context.googleAnalaytics && <p>Google Analytics is enabled</p>}
            {context.googleFonts && <p>Google Fonts is enabled</p>}
        
         </div>
    );
};
export default Datenschutzerklarung;
