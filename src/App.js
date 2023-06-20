import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Datenschutzerklaerung from './components/Datenschutzerklaerung';
import { DataContext } from './DataContext';

const App = () => {
  App.defaultProps = {
    data : {
    verantwortlicher: {
      companyName: '',
      companyAddress: '',
      url: ''
    },
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
        status : false,
        additionalText : ""
      }
    }
  }
}
const [data, setData] = useState(App.defaultProps.data);
const [status, setStatus] = useState([false, false, false]);
useEffect(() => {
  let newStatus = [...status];
  if (data.companyName != '') {newStatus[0] = true;}
  if (data.googleAnalaytics)  {newStatus[1]=true}
  setStatus(newStatus);
}, [data]);
 
  return (
    <div className="App">
      <DataContext.Provider value={data}>
      <header >
        <h1>Generator für Datenschutzerklärungen</h1>
      </header>
      <main>
        <form>
          <div className={status[0] ? "input-group green" : "input-group"}>
          <h2 className='stepheading'>Schritt 1</h2>
          <label htmlFor="companyName">Firmenname</label>
          <input 
            type="text" 
            id="companyName" 
            name="companyName" 
            value={data.companyName} 
            placeholder="Firemnname" 
            onChange={(e) => setData({ ...data, companyName: e.target.value })} />
          <label htmlFor="url">URL</label>
          <input 
            type="text" 
            id="url" 
            name="url" 
            value={data.url} 
            placeholder="Url" 
            onChange={(e) => setData({ ...data, url: e.target.value })} />
          <label htmlFor="companyAddress">Adresse</label>
          <input 
            type="text" 
            id="companyAddress" 
            name="companyAddress" 
            value={data.companyAddress} 
            placeholder="Adresse" 
            onChange={(e) => setData({ ...data, companyAddress: e.target.value })} />
            </div>
            <div className={status[0] ? "input-group green" : "input-group"}>
          <label htmlFor="companyName">Firmenname</label>
          <input 
            type="text" 
            id="companyName" 
            name="companyName" 
            value={data.companyName} 
            placeholder="Firemnname" 
            onChange={(e) => setData({ ...data, companyName: e.target.value })} />
          <label htmlFor="url">URL</label>
          <input 
            type="text" 
            id="url" 
            name="url" 
            value={data.url} 
            placeholder="Url" 
            onChange={(e) => setData({ ...data, url: e.target.value })} />
          <label htmlFor="companyAddress">Adresse</label>
          <input 
            type="text" 
            id="companyAddress" 
            name="companyAddress" 
            value={data.companyAddress} 
            placeholder="Adresse" 
            onChange={(e) => setData({ ...data, companyAddress: e.target.value })} />
            </div>
            <div className={status[0] ? "input-group green" : "input-group"}>
            <h2 className='stepheading'>Schritt 2</h2>
          <label htmlFor="companyName">Firmenname</label>
          <input 
            type="text" 
            id="companyName" 
            name="companyName" 
            value={data.companyName} 
            placeholder="Firemnname" 
            onChange={(e) => setData({ ...data, companyName: e.target.value })} />
          <label htmlFor="url">URL</label>
          <input 
            type="text" 
            id="url" 
            name="url" 
            value={data.url} 
            placeholder="Url" 
            onChange={(e) => setData({ ...data, url: e.target.value })} />
          <label htmlFor="companyAddress">Adresse</label>
          <input 
            type="text" 
            id="companyAddress" 
            name="companyAddress" 
            value={data.companyAddress} 
            placeholder="Adresse" 
            onChange={(e) => setData({ ...data, companyAddress: e.target.value })} />
            </div>
          <div className={status[1] ? "input-group green" : "input-group"}>
          <h2 className='stepheading'>Schritt 3</h2>
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
          <Datenschutzerklaerung status={status}/>
      </main>
      </DataContext.Provider>
    </div>
  );
}

export default App;
