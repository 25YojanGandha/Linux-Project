import { useContext } from 'react';
import { GlobalData } from '../../App';
import './BodyContainer.css';
// import Modal from "../windowModal/Modal"
import Modal from '../windowModal/Modal';
function BodyContainer() {
  let gData = useContext(GlobalData);
  return (
    <div className='BodyContainer'>
      {gData.isBrowser.appOpend ? (
        <Modal data={{ innerData: 'Browser' }} />
      ) : (
        ''
      )}
      {gData.isClock.appOpend ? <Modal data={{ innerData: 'Clock' }} /> : ''}
      {gData.isTerminal.appOpend ? <Modal data={{ innerData: 'Terminal' }} /> : ''}
      {gData.isAccount.appOpend ? <Modal data={{ innerData: 'Account' }} /> : ''}
    </div>
  );
}

export default BodyContainer;
