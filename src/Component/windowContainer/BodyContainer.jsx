import { useContext } from 'react';
import { GlobalData } from '../../App';
import './BodyContainer.css';
// import Modal from "../windowModal/Modal"
import Modal from '../windowModal/Modal'
function BodyContainer() {
  let gData = useContext(GlobalData);
 return <div className='BodyContainer'>{gData.isBrowser === 0?<Modal/>:''}</div>;
}

export default BodyContainer;