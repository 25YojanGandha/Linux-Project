import { useContext } from 'react';
import { GlobalData } from '../../App';
import './BodyContainer.css';
import Modal from '../windowModal/Modal';
import Account from '../Account_Component/Account';

function BodyContainer() {
  let gData = useContext(GlobalData);
  return (
    <div className='BodyContainer'>
      {gData.isBrowser.appOpend ? (
        <Modal data={{ innerData: 'Browser', component: '' }} />
      ) : (
        ''
      )}
      {gData.isClock.appOpend ? (
        <Modal data={{ innerData: 'Clock', component: '' }} />
      ) : (
        ''
      )}
      {gData.isTerminal.appOpend ? (
        <Modal data={{ innerData: 'Terminal', component: '' }} />
      ) : (
        ''
      )}
      {gData.isAccount.appOpend ? (
        <Modal data={{ innerData: 'Account', component: <Account/> }} />
      ) : (
        ''
      )}
      {gData.isAppstore.appOpend ? (
        <Modal data={{ innerData: 'Appstore', component: '' }} />
      ) : (
        ''
      )}
      {gData.isHelp.appOpend ? (
        <Modal data={{ innerData: 'Help', component: '' }} />
      ) : (
        ''
      )}
      {gData.isTrash.appOpend ? (
        <Modal data={{ innerData: 'Trash', component: '' }} />
      ) : (
        ''
      )}
    </div>
  );
}

export default BodyContainer;
