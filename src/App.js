import './App.css';
import { createContext, useState } from 'react';
import Body from './Component/Body';


export let GlobalData = createContext();

function App() {
  let [isBrowser, setBrowser] = useState();
  return (
    <GlobalData.Provider value={{isBrowser,setBrowser}}>
      <div className='App'>
        <Body/>
      </div>
     </GlobalData.Provider>
  );
}

export default App;
