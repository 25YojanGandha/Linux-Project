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
    
  };

  return (

    <div id='dockBody'>
      <div className='dock-appRecent-container'>
        {gData.dockIconArray.map((appName)=>{
          return  <div
          className={
            gData.currentApp[0] === appName &&
            gData["is"+ appName].appOpend &&
            !gData["is"+ appName].minimize
              ? 'appContainer currApp'
              : 'appContainer'
          }
          onClick={() => {
            handleDock(appName);
          }}
        >
          {gData["is"+ appName].appOpend ? <div className='dot'></div> : ''}
          <img src={`./images/${appName}.png`} alt={appName} />
        </div> ;
        })}

        <div className='dock-divider'></div>

        {/* TRASH */}
        <div className={
          gData.currentApp[0] === 'Trash' &&
            gData.isTrash.appOpend &&
            gData.isTrash.minimize === false
            ? 'appContainer_2 currApp'
            : 'appContainer_2'
        }
          onClick={() => {
            handleDock('Trash');
          }}
        >
          {gData.isTrash.appOpend ? <div className='dot'></div> : ''}
          <img src='./images/trash.png' alt='Trash' />
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


