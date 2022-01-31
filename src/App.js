import './App.css';
import * as React from 'react';
import { createContext, useState } from 'react';
import Body from './Component/Body';

export let GlobalData = createContext();

function App() {

  let [dockIconArray, setDockIconArray] = useState(['Browser', 'Terminal', 'Account', 'Appstore', 'Help']);

  let [currentApp, setCurrentApp] = useState([]);

  let [accountData, setAccountData] = useState({
    isNewAccount: false,
    editOpened: false,
    passView: false,
    userName: 'Yojan Gandha',
  });

  let [isBrowser, setBrowser] = useState({
    appOpend: false,
    minimize: false,
    isPermanent: true,
    windowModal: ''
  });

  let [isClock, setClock] = useState({
    appOpend: false,
    minimize: false,
    windowModal: ''
  });

  let [isTerminal, setTerminal] = useState({
    appOpend: false,
    minimize: false,
    isPermanent: true,
    windowModal: ''
  });

  let [isAccount, setAccount] = useState({
    appOpend: false,
    minimize: false,
    isPermanent: true,
    windowModal: ''
  });

  let [isAppstore, setAppstore] = useState({
    appOpend: false,
    minimize: false,
    isPermanent: true,
    windowModal: ''
  });

  let [isHelp, setHelp] = useState({
    appOpend: false,
    minimize: false,
    isPermanent: true,
    windowModal: ''
  });

  let [isTrash, setTrash] = useState({
    appOpend: false,
    minimize: false,
    windowModal: ''
  });

  let [isMessage, setMessage] = useState({
    appOpend: false,
    minimize: false,
    windowModal: ''
  });

  let [isMusic, setMusic] = useState({
    appOpend: false,
    minimize: false,
    windowModal: ''
  });

  let [isWeather, setWeather] = useState({
    appOpend: false,
    minimize: false,
    windowModal: ''
  });

  let [isHillclimb, setHillclimb] = useState({
    appOpend: false,
    minimize: false,
    windowModal: ''
  });

  let [isMaps, setMaps] = useState({
    appOpend: false,
    minimize: false,
    windowModal: ''
  });

  let [isCalender, setCalender] = useState({
    appOpend: false,
    minimize: false,
    windowModal: ''
  });

  let [isVscode, setVscode] = useState({
    appOpend: false,
    minimize: false,
    windowModal: ''
  });

  let [isChess, setChess] = useState({
    appOpend: false,
    minimize: false,
    windowModal: ''
  });

  let [isNotepad, setNotepad] = useState({
    appOpend: false,
    minimize: false,
    windowModal: ''
  });

  let [isMeet, setMeet] = useState({
    appOpend: false,
    minimize: false,
    windowModal: ''
  });

  let [isSettings, setSettings] = useState({
    appOpend: false,
    minimize: false,
    windowModal: ''
  });

  let [isCamera, setCamera] = useState({
    appOpend: false,
    minimize: false,
    windowModal: ''
  });

  let [isGallery, setGallery] = useState({
    appOpend: false,
    minimize: false,
    windowModal: ''
  });

  let [isMenu, setMenu] = useState(false);

  let handleDockApp = (currentClikedApp, gData) => {
    gData.setMenu(false);

    if (gData.currentApp[0] !== currentClikedApp) {
      let newArr = gData.currentApp.filter((ele) => {
        return ele !== currentClikedApp;
      });
      gData.setCurrentApp([currentClikedApp, ...newArr]);
    }

    if (!gData['is' + currentClikedApp].appOpend) {
      gData['set' + currentClikedApp]({
        ...gData['is' + currentClikedApp],
        appOpend: true,
      });
    }

    if (gData['is' + currentClikedApp].appOpend && gData.currentApp[0] === currentClikedApp) {
      gData['is' + currentClikedApp].windowModal.current.style.display = 'none';
      gData['set' + currentClikedApp]({
        ...gData['is' + currentClikedApp],
        minimize: true,
      });
      let newArr = gData.currentApp.filter((ele) => {
        return ele !== currentClikedApp;
      });
      gData.setCurrentApp([...newArr]);
    }

    if (gData['is' + currentClikedApp].minimize) {
      gData['is' + currentClikedApp].windowModal.current.style.display = 'flex';
      gData['set' + currentClikedApp]({
        ...gData['is' + currentClikedApp],
        minimize: false,
      });
    }

    if(!gData.dockIconArray.includes(currentClikedApp))
    gData.dockIconArray = [...gData.dockIconArray, currentClikedApp];

    gData.setDockIconArray(gData.dockIconArray);
  };

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

        isMenu,
        setMenu,

        isGallery,
        setGallery,

        isCamera,
        setCamera,

        isSettings,
        setSettings,

        isMeet,
        setMeet,

        isNotepad,
        setNotepad,

        isChess,
        setChess,

        isVscode,
        setVscode,

        isCalender,
        setCalender,

        isMaps,
        setMaps,

        isHillclimb,
        setHillclimb,

        isWeather,
        setWeather,

        isMusic,
        setMusic,

        isMessage,
        setMessage,

        handleDockApp
      }}
    >
        <div className='App'>
          <Body />
        </div>
    </GlobalData.Provider>
  );
}

export default App;
