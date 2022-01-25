import { useContext } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { GlobalData } from '../../App';
import './Dock.css';

function Dock() {
  let gData = useContext(GlobalData);

  let handleDock = (currentClikedApp) => {
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
    if (
      gData['is' + currentClikedApp].appOpend &&
      gData.currentApp[0] === currentClikedApp
    ) {
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
  };

  return (
    <div id='dockBody'>
      <div className='dock-appRecent-container'>
        {console.log(gData.currentApp)}
        <div
          className={
            gData.currentApp[0] === 'Browser' &&
            gData.isBrowser.appOpend &&
            !gData.isBrowser.minimize
              ? 'appContainer currApp'
              : 'appContainer'
          }
          onClick={() => {
            handleDock('Browser');
          }}
        >
          {gData.isBrowser.appOpend ? <div className='dot'></div> : ''}
          <img src='./images/web-browser.png' alt='Browser' />
        </div>
        <div
          className={
            gData.currentApp[0] === 'Clock' &&
            gData.isClock.appOpend &&
            gData.isClock.minimize === false
              ? 'appContainer currApp'
              : 'appContainer'
          }
          onClick={() => {
            handleDock('Clock');
          }}
        >
          {gData.isClock.appOpend ? <div className='dot'></div> : ''}
          <img src='./images/clock.png' alt='Browser' />
        </div>
        <div
          className={
            gData.currentApp[0] === 'Terminal' &&
            gData.isTerminal.appOpend &&
            gData.isTerminal.minimize === false
              ? 'appContainer currApp'
              : 'appContainer'
          }
          onClick={() => {
            handleDock('Terminal');
          }}
        >
          {gData.isTerminal.appOpend ? <div className='dot'></div> : ''}
          <img src='./images/bash.png' alt='Browser' />
        </div>
        <div
          className={
            gData.currentApp[0] === 'Account' &&
            gData.isAccount.appOpend &&
            gData.isAccount.minimize === false
              ? 'appContainer currApp'
              : 'appContainer'
          }
          onClick={() => {
            handleDock('Account');
          }}
        >
          {gData.isAccount.appOpend ? <div className='dot'></div> : ''}
          <img src='./images/account.png' alt='Browser' />
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
