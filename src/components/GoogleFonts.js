import React from "react";
import { DataContext } from "../DataContext";
import { useContext } from "react";

const GoogleFonts = () => {
    const context = useContext(DataContext);
    return (
        <div className='datenschutz-element'>
            <h2>Google Fonts</h2>
         </div>
    );
};
export default GoogleFonts;
