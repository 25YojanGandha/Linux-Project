import { useContext } from 'react';
import { GlobalData } from '../../App';
import './BodyContainer.css';
import Modal from '../windowModal/Modal';
import Menu from '../menu/Menu';
import Account from '../Account_Component/Account';
import AppStore from '../AppStore/AppStore';
// import 

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
      {gData.isTerminal.appOpend ? (
        <Modal data={{ innerData: 'Terminal' }} />
      ) : (
        ''
      )}
      {gData.isAccount.appOpend ? (
        <Modal data={{ innerData: 'Account', component: <Account /> }} />
      ) : (
        ''
      )}
      {gData.isAppstore.appOpend ? (
        <Modal data={{ innerData: 'Appstore',component:<AppStore/> }} />
      ) : (
        ''
      )}
      {gData.isHelp.appOpend ? <Modal data={{ innerData: 'Help' }} /> : ''}
      {gData.isTrash.appOpend ? <Modal data={{ innerData: 'Trash' }} /> : ''}

      {/* MENU BAR */}
      {gData.isMenu ? <Menu /> : ''}
    </div>
  );
}

export default BodyContainer;