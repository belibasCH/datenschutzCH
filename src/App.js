import './App.css';
import './css/icons.css'
import { useEffect, useState } from 'react';
import Datenschutzerklaerung from './components/Datenschutzerklaerung';
import { DataContext } from './DataContext';
import FormStepOne from './components/Form/FormStepOne';
import FormStepTwo from './components/Form/FormStepTwo';
import FormStepThree from './components/Form/FormStepThree';

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

      verarbeitung: {
        finanzdaten: false,
        gesundheitsdaten: false,
        standortdaten: false,
        biodaten: false,
        privatsphaere: {

        },
        autoEntscheide: false,
        datenverkauf: false,
        datenCH: false,
        datenEU: false,
        datenWelt: false
      },
      dienste: {
        googleAnalytics: false,
        googleFonts: false,
        matomo: {
          status: false,
          additionalText: ""
        }
      }
    }
  }
  const [data, setData] = useState(App.defaultProps.data);
  const [status, setStatus] = useState([false, false, false]);
  useEffect(() => {
    let newStatus = [...status];
    if (data.companyName != '') { newStatus[0] = true; }
    if (data.googleAnalaytics) { newStatus[1] = true }
    setStatus(newStatus);
  }, [data]);

  return (
    <div className="App">
      <DataContext.Provider value={data}>
        <main>
          <form>
            <FormStepOne />
            <FormStepTwo />
            <FormStepThree />
            

            <div className={status[1] ? "input-group green" : "input-group"}>
              <h2 className='stepheading'>Schritt 4</h2>
              <label htmlFor="googleAnalaytics">Google Analytics</label>
              <input
                type="checkbox"
                id="googleAnalaytics"
                name="googleAnalaytics"
                checked={data.googleAnalaytics}
                onChange={(e) => setData({ ...data, googleAnalaytics: e.target.checked })} />
              <label htmlFor="googleFonts">Google Fonts</label>
              <input
                type="checkbox"
                id="googleFonts"
                name="googleFonts"
                checked={data.googleFonts}
                onChange={(e) => setData({ ...data, googleFonts: e.target.checked })} />

            </div>
          </form>
          <Datenschutzerklaerung status={status} />
        </main>
      </DataContext.Provider>
    </div>
  );
}

export default App;
