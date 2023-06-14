import React from "react";
import { DataContext } from "../DataContext";
import { useContext } from "react";

const GoogleAnalytics = () => {
    const context = useContext(DataContext);
    return (
        <div className='datenschutz-element'>
            <h2>Google Analytics</h2>
         </div>
    );
    
};
export default GoogleAnalytics;
