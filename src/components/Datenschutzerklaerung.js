import React from "react";
import { DataContext } from "../DataContext";
import { useContext } from "react";
import GoogleAnalytics from "./GoogleAnalytics";
import GoogleFonts from "./GoogleFonts";

const Datenschutzerklaerung = () => {
    const context = useContext(DataContext);
    return (
        <div className='datenschutz-container'>
            <div className='datenschutz-document'>
            <h3>Datenschutzerklärung</h3>
            {context.googleAnalaytics && <GoogleAnalytics/>}
            {context.googleFonts && <GoogleFonts/>}
         </div>
         </div>
    );
};
export default Datenschutzerklaerung;
