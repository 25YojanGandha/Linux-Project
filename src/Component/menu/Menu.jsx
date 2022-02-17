import { useContext } from 'react';
import { GlobalData } from '../../App';
import './Menu.css';
// import { Input } from '@nextui-org/react';

function Menu() {
  let gData = useContext(GlobalData);

  return (
    <div className='menu-main-container'>
      <div className='menu-search-bar'>
        <div className='inputContainer'>
          <input placeholder='Type To Search' type='text' />
        </div>
      </div>
      <div className='menu-app-container'>
        {gData.applicationsArray.map((appName) => {
          return (
            <div
              className='app-container-card'
              onClick={() => {
                gData.handleDockApp(appName, gData);
              }}
            >
              <img src={`./images/${appName}.png`} alt={appName} />
              <div className='app-text'>{appName}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
