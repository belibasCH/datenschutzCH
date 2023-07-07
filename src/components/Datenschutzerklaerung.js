import React from "react";
import { DataContext } from "../DataContext";
import { useContext } from "react";
import GoogleAnalytics from "./GoogleAnalytics";
import GoogleFonts from "./GoogleFonts";
import Eins_WorumGehtEs from "./Eins_WorumGehtEs";
import '../css/Datenschutz.css'
import CopyBanner from "./CopyBanner";

const Datenschutzerklaerung = ({status}) => {
    const context = useContext(DataContext);
    console.log(context);
   
    return (
        <div id="datenschutz-container">
            <CopyBanner status={status}/>
            <div id='datenschutz-document' className={status ? 'green' : ""}>
                <h1>Datenschutzerklärung der {context.data.companyName}</h1>
                <button ></button>
                <Eins_WorumGehtEs/>
                <Eins_WorumGehtEs/>
                <Eins_WorumGehtEs/>
                {context.googleAnalaytics && <GoogleAnalytics/>}
                {context.googleFonts && <GoogleFonts/>}
            </div>
        </div>
        
    );
};
export default Datenschutzerklaerung;
