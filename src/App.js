import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Datenschutzerklaerung from './components/Datenschutzerklaerung';
import { DataContext } from './DataContext';

const App = () => {
  App.defaultProps = {
    data : {
    companyName: '',
    companyAddress: '',
    googleAnalytics: false,
    googleFonts: false
  }
}
const [data, setData] = useState(App.defaultProps.data);

  return (
    <div className="App">
      <DataContext.Provider value={data}>
      <header >
        <h1>Generator für Datenschutzerklärungen</h1>
        <h2>revDSG</h2>
      </header>
      <main>
        <form>
          <label htmlFor="companyName">Company Name</label>
          <input 
            type="text" 
            id="companyName" 
            name="companyName" 
            value={data.companyName} 
            placeholder="Firemnname" 
            onChange={(e) => setData({ ...data, companyName: e.target.value })} />
          <label htmlFor="companyAddress">Company Address</label>
          <input 
            type="text" 
            id="companyAddress" 
            name="companyAddress" 
            value={data.companyAddress} 
            placeholder="Adresse" 
            onChange={(e) => setData({ ...data, companyAddress: e.target.value })} />
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
        </form>
          <Datenschutzerklaerung />
      </main>
      </DataContext.Provider>
    </div>
  );
}

export default App;
