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
      companyPLZ: '',
      companyPlace: '',
      url: '',
      technischAufbewahrung: 0,
      technischKostenlosesWlan: false,
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

  return (
    <div className="App">
      <DataContext.Provider value={data}>
        <main>
          <form>
            <FormStepOne />
            <FormStepTwo />
            <FormStepThree />
            <FormStepFour />
            

    
          </form>
          <Datenschutzerklaerung status={true} />
        </main>
      </DataContext.Provider>
    </div>
  );
}

export default App;
