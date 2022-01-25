import './App.css';
import { createContext, useState } from 'react';
import Body from './Component/Body';

export let GlobalData = createContext();

function App() {

  let [currentApp, setCurrentApp] = useState([]);
  
  let [isBrowser, setBrowser] = useState({
    appOpend: false,
    minimize: false,
    windowModal:''
  });

  let [isClock, setClock] = useState({
    appOpend: false,
    minimize: false,
    windowModal:''
  });

  let [isTerminal, setTerminal] = useState({
    appOpend: false,
    minimize: false,
    windowModal:''
  });
  
  let [isAccount, setAccount] = useState({
    appOpend: false,
    minimize: false,
    windowModal:''
  });

  return (
    <GlobalData.Provider
      value={{
        isBrowser,
        setBrowser,
        currentApp,
        setCurrentApp,
        isClock,
        setClock,
        isTerminal,
        setTerminal,
        isAccount,
        setAccount,
      }}
    >
      <div className='App'>
        <Body />
      </div>
    </GlobalData.Provider>
  );
}

export default App;
