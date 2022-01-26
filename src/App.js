import './App.css';
import { createContext, useState } from 'react';
import Body from './Component/Body';

export let GlobalData = createContext();

function App() {

  let [dockIconArray, setDockIconArray] = useState(['Browser', 'Clock', 'Terminal','Account','Appstore','Help']);
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

  let [isAppstore, setAppstore] = useState({
    appOpend: false,
    minimize: false,
    windowModal:''
  });

  let [isHelp, setHelp] = useState({
    appOpend: false,
    minimize: false,
    windowModal:''
  });

  let [isTrash, setTrash] = useState({
    appOpend: false,
    minimize: false,
    windowModal:''
  });

  return (
    <GlobalData.Provider
      value={{
        dockIconArray,
        setDockIconArray,

        currentApp,
        setCurrentApp,

        isBrowser,
        setBrowser,

        isClock,
        setClock,

        isTerminal,
        setTerminal,

        isAccount,
        setAccount,

        isAppstore,
        setAppstore,

        isHelp,
        setHelp,

        isTrash,
        setTrash,

      }}
    >
      <div className='App'>
        <Body />
      </div>
    </GlobalData.Provider>
  );
}

export default App;
