import { useContext } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { GlobalData } from '../../App';
import './Dock.css';

function Dock() {
  let gData = useContext(GlobalData);
  return (
    <div id='dockBody'>
      <div className='dock-appRecent-container'>
        <div
          className='appContainer'
          onClick={() => {
            console.log('a');
            // 0- Default State
            // 1- Minimize
            // 2- Maximize
            // 3- Close
            gData.setBrowser(0);
            console.log(gData.isBrowser);
          }}
        >
          <img src='./images/web-browser.png' alt='Browser' />
        </div>
        <div className='appContainer'>
          <img src='./images/clock.png' alt='Browser' />
        </div>
        <div className='appContainer'>
          <img src='./images/bash.png' alt='Browser' />
        </div>
        <div className='appContainer'>
          <img src='./images/store.png' alt='Browser' />
        </div>
        <div className='appContainer'>
          <img src='./images/help.png' alt='Browser' />
        </div>

        <div className='dock-divider'></div>

        <div className='appContainer_2'>
          <img src='./images/trash.png' alt='Browser' />
        </div>
      </div>
      <div className='dock-appMenu-container'>
        <span>
          <CgMenuGridR />
        </span>
      </div>
    </div>
  );
}

export default Dock;
