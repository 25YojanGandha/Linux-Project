import './App.css';
import { createContext } from 'react';
// import { useState } from 'react/cjs/react.production.min';
import Body from './Component/Body';
import Modal from './Component/windowModal/Modal';
import SignUp from './Component/signUp/SignUp';

export let GlobalData = createContext();

function App() {
  // let [isBrowser, setBrowser] = useState(0);
  return (
    // <GlobalData.Provider value={{isBrowser,setBrowser}}>
      <div className='App'>
        <Body/>
        {/* <Modal/> */}
        {/* <SignUp/> */}
      </div>
    // </GlobalData.Provider>
  );
}

export default App;
