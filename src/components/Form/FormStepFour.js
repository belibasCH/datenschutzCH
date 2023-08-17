import React , { useContext, useEffect } from "react";
import { useState } from 'react';
import Card from "../Card";
import { DataContext } from "../../DataContext";
import GoogleAnalytics from '../Services/GoogleAnalytics';



const FormStepFour = () => {
  const [status, setStatus] = useState(false);
  const context =useContext(DataContext);

useEffect(() => {
  context.data.keine 
  || context.data.googleAnalytics 
  || context.data.googleFonts 
  || context.data.matomo
  || context.data.mailchimp
  || context.data.pipedrive
  || context.data.cloudflare 
  ? setStatus(true) : console.log("no update"); 
}, [context.data]);

  return (
    <div className={status ? "input-group green" : "input-group red"} >
      <div className={status ? "stats green" : "stats red"} >{status ? "1" : "0"} von 1</div>
      <div className='stepheading'>
        <h2 >Schritt 4</h2>
        <h3>Welche externen Dienste nutzen Sie?</h3>
      </div>
      <div className="card-container">
        <Card imageUrl={require('../../assets/logos/googleAnalytics.png')}  action={newStatus => context.update("googleAnalytics")(newStatus)} title="Google Analytics" content={""} />
        <Card imageUrl={require('../../assets/logos/dynamics.png')}     action={newStatus => context.update("msdynamics")(newStatus)}title="Microsoft Dynamics" content={""} />
        <Card imageUrl={require('../../assets/logos/matomo.png')}  action={newStatus => { context.update("matomo")(newStatus)}}  title="Matomo" content={""} />
        <Card imageUrl={require('../../assets/logos/mailchimp.png')} action={newStatus => context.update("mailchimp")(newStatus)}  title="Mailchimp" content={""} />
        <Card imageUrl={require('../../assets/logos/pipedrive.png')} action={newStatus => context.update("pipedrive")(newStatus)}  title="Pipedrive" content={""} />
        <Card imageUrl={require('../../assets/logos/cloudflare.png')} action={newStatus => context.update("cloudflare")(newStatus)}  title="Cloudflare" content={""} />
        <Card imageUrl={require('../../assets/logos/keine.png')}  action={newStatus => context.update("keine")(newStatus)} title="keine/andere" content={""} />
      </div>
    </div>)
}

export default FormStepFour;
