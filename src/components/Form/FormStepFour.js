import React , { useContext, useEffect } from "react";
import { useState } from 'react';
import Card from "../Card";
import { DataContext } from "../../DataContext";
import GoogleAnalytics from './../GoogleAnalytics';



const FormStepFour = () => {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState(useContext(DataContext));

useEffect(() => {
  data.keine 
  || data.googleAnalytics 
  || data.googleFonts 
  || data.matomo
  || data.mailchimp
  ? setStatus(true) : setStatus(false); 
}, [data]);

  return (
    <div className={status ? "input-group green" : "input-group red"} >
      <div className={status ? "stats green" : "stats red"} >{status ? "1" : "0"} von 1</div>
      <div className='stepheading'>
        <h2 >Schritt 4</h2>
        <h3>Welche externen Dienste nutzen Sie?</h3>
      </div>
      <div className="card-container">
        <Card imageUrl={require('../../assets/logos/googleAnalytics.png')}  action={newStatus => setData({ ...data, googleAnalytics: newStatus })} title="Google Analytics" content={""} />
        <Card imageUrl={require('../../assets/logos/googleFonts.png')}     action={newStatus => setData({ ...data, googleFonts: newStatus })} title="Google Fonts" content={""} />
        <Card imageUrl={require('../../assets/logos/matomo.png')}  action={newStatus => setData({ ...data, matomo: newStatus })}  title="Matomo" content={""} />
        <Card imageUrl={require('../../assets/logos/mailchimp.png')}  action={newStatus => setData({ ...data, mailchimp: newStatus })}  title="Mailchimp" content={""} />
        <Card imageUrl={require('../../assets/logos/keine.png')}  action={newStatus => setData({ ...data, keine: newStatus })}  title="keine/andere" content={""} />
      </div>
    </div>)
}

export default FormStepFour;
