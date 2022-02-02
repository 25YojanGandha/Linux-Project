import { useContext, useState } from 'react';
import { GlobalData } from '../../App';
import './Menu.css';
// import { Input } from '@nextui-org/react';

function Menu() {
  let gData = useContext(GlobalData);
  

  return (
    <div className='menu-main-container'>
      <div className='menu-search-bar'>
        <div className='inputContainer'>
          {/* <svg xmlns='http://www.w3.org/2000/svg' height='16' width='16'>
            <path
              d='M7 1C3.69 1 1 3.69 1 7s2.69 6 6 6a5.948 5.948 0 0 0 3.664-1.273l2.863 2.863 1.063-1.063-2.863-2.863A5.949 5.949 0 0 0 13 7c0-3.31-2.69-6-6-6zm0 1a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z'
              className='searchIcon'
              color='#000'
              font-weight='400'
              font-family='sans-serif'
              white-space='normal'
              overflow='visible'
              fill='gray'
            />
          </svg> */}
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
