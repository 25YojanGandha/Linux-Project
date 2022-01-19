import './Body.css'
import BodyContainer from './windowContainer/BodyContainer';
import Dock from './dock/Dock';
import HeaderBar from './headerModal/HeaderBar';

function Body() {
 return (
   <div id='Body'>
     <HeaderBar />
     <div className='gridContainer'>
       <Dock />
       <BodyContainer />
     </div>
   </div>
 );
}

export default Body;