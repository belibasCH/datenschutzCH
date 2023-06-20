import React from "react";
import { DataContext } from "../DataContext";
import { useContext } from "react";
import GoogleAnalytics from "./GoogleAnalytics";
import GoogleFonts from "./GoogleFonts";
import Eins_WorumGehtEs from "./Eins_WorumGehtEs";
import '../css/Datenschutz.css'
import CopyBanner from "./CopyBanner";

const Datenschutzerklaerung = (status) => {
    const context = useContext(DataContext);
    
   
    return (
        <>
            <div id='datenschutz-document'>
            <CopyBanner data={status}/>
                <h1>Datenschutzerklärung der {context.companyName}</h1>
                <Eins_WorumGehtEs/>
                {context.googleAnalaytics && <GoogleAnalytics/>}
                {context.googleFonts && <GoogleFonts/>}
            </div>

        </>
        
    );
};
export default Datenschutzerklaerung;