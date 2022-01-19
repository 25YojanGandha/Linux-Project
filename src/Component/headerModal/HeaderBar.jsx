import './HeaderBar.css';
import { RiSignalWifi3Fill } from 'react-icons/ri';
import { FaBluetooth } from 'react-icons/fa';
import { AiFillSound } from 'react-icons/ai';
import { GiBattery50 } from 'react-icons/gi';
function HeaderBar() {
 return (
  <div id='headerBar'>

   <div className='left-headerBar-container'>
    <div className='headerOptionBox'>
     <div className='headerOptionText'>
      Activites
      </div>
    </div>
   </div>

    <div className='timer-headerBar'>18 Jan 10:30 AM</div>
   
   <div className='right-headerBar-container'>
    <RiSignalWifi3Fill/>
    <AiFillSound />
    <FaBluetooth/>
    <GiBattery50 />
   </div>
   
  </div>
  );
}

export default HeaderBar;