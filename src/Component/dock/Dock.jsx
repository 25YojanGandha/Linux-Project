import { CgMenuGridR } from 'react-icons/cg';
import './Dock.css';
function Dock() {
  return (
    // <>
      <div id='dockBody'>
        <div className='dock-appRecent-container'>
          <div className='appContainer'>
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
    // </>
  );
}

export default Dock;
