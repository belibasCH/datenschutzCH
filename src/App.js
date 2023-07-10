import './App.css';
import './css/icons.css'
import { useEffect, useState } from 'react';
import Datenschutzerklaerung from './components/Datenschutzerklaerung';
import { DataContext } from './DataContext';
import FormStepOne from './components/Form/FormStepOne';
import FormStepTwo from './components/Form/FormStepTwo';
import FormStepThree from './components/Form/FormStepThree';
import FormStepFour from './components/Form/FormStepFour';

const App = () => {
  App.defaultProps = {
    data: {
      companyName: '',
      companyAddress: '',
      companyPLZ: 0,
      companyPlace: '',
      eMail: '',
      url: '',
      datenschutzbeauftragter: '',
      technischAufbewahrung: 0,
      technischWlan: false,
      registrierungWettbewerbe: false,
      registrierungLogin: false,
      registrierungNewsletter: false,
      registrierungGutscheine: false,
      registrierungAufbewahrung: 0,
      kommunikationChat: false,
      kommunikationAufbewahrungChats: 0,
      kommunikationRecording: false,
      kommunikationAufbewahrungRecordings: 0,
      kommunikationAufbewahrungIdentitaet: 0,
      kommunikationAufbewahrungMail: 0,
      stammEvents: false,
      stammGutscheine: false,
      stammNewsletter: false,
      stammAufbewahrung: 0,
      vertragAufbewahrung: 0,
      vertragReaktionen: false,
      verhaltenBewegungsprofil: false,
      verhaltenAufbewahrungBewegung: 0,
      verhaltenAufbewahrung: 0,
      sonstigeEventsTracing: 0,
      
      CH: false,
      EU: false,
      World: false,
    
      googleAnalytics: false,
      googleFonts: false,
      matomo: false,
      mailchimp: false,
      keine: false,
      }
    }
  
  const [data, setData] = useState(App.defaultProps.data);
  const [status, setStatus] = useState(false);


  useEffect(() => {
    if (isComplete()) {
      console.log("complete");
      setStatus(true);
    }
    else{
      setStatus(false);
      console.log("not comp");
    }
  }, [data]);


  const update = key => value =>{
    setData({ ...data, [key]: value });
  }

  const isComplete = () =>  {
    let one = false;
    let two = false;
    let three = false;

    one = data.companyName !== ""
      && data.companyAddress !== ""
      && data.companyPLZ !== 0
      && data.companyPlace !== ""
      && data.url !== ""
      && data.technischAufbewahrung !== 0
      && data.registrierungAufbewahrung !== 0
      && data.registrierungAufbewahrung !== 0
      && data.kommunikationAufbewahrungIdentitaet !== 0
      && data.kommunikationAufbewahrungMail !== 0
      && data.stammAufbewahrung !== 0
      && data.vertragAufbewahrung !== 0
      && data.verhaltenAufbewahrung !== 0
      && data.sonstigeEventsTracing !== 0
      
      two  = data.CH || data.EU || data.World
      three = data.googleAnalytics || data.googleFonts || data.mailchimp || data.matomo || data.keine

    return one && two && three;
  }

  return (
    <div className="App">
      <DataContext.Provider value={{data:data, update: update}}>
        <main>
          <form>
            <FormStepOne />
            <FormStepTwo />
            <FormStepThree />
            <FormStepFour />
          </form>
          <Datenschutzerklaerung status={status} />
        </main>
      </DataContext.Provider>
    </div>
  );
}

export default App;
