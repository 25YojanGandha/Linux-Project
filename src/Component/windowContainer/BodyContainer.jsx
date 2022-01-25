import { useContext } from 'react';
import { GlobalData } from '../../App';
import './BodyContainer.css';
import Modal from '../windowModal/Modal';

function BodyContainer() {
  let gData = useContext(GlobalData);
  return (
    <div className='BodyContainer'>
      {gData.isBrowser.appOpend ? <Modal data={{ innerData: 'Browser' }} /> : ''}
      {gData.isClock.appOpend ? <Modal data={{ innerData: 'Clock' }} /> : ''}
      {gData.isTerminal.appOpend ? <Modal data={{ innerData: 'Terminal' }} /> : ''}
      {gData.isAccount.appOpend ? <Modal data={{ innerData: 'Account' }} /> : ''}
      {gData.isAppstore.appOpend ? <Modal data={{ innerData: 'Appstore' }} /> : ''}
      {gData.isHelp.appOpend ? <Modal data={{ innerData: 'Help' }} /> : ''}
      {gData.isTrash.appOpend ? <Modal data={{ innerData: 'Trash' }} /> : ''}
    </div>
  );
}

export default BodyContainer;
