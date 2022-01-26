import { useContext } from 'react';
import { GlobalData } from '../../App';
import './BodyContainer.css';
import Modal from '../windowModal/Modal';
<<<<<<< HEAD
import Account from '../Account_Component/Account';
=======
import Menu from '../menu/Menu';
// import 
>>>>>>> 3ada6afaedb0c86461f3ce97da140321d21e0c5c

function BodyContainer() {
  let gData = useContext(GlobalData);
  return (
    <div className='BodyContainer'>
<<<<<<< HEAD
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
=======
      {gData.isBrowser.appOpend ? <Modal data={{ innerData: 'Browser' }} /> : ''}
      {gData.isClock.appOpend ? <Modal data={{ innerData: 'Clock' }} /> : ''}
      {gData.isTerminal.appOpend ? <Modal data={{ innerData: 'Terminal' }} /> : ''}
      {gData.isAccount.appOpend ? <Modal data={{ innerData: 'Account' }} /> : ''}
      {gData.isAppstore.appOpend ? <Modal data={{ innerData: 'Appstore' }} /> : ''}
      {gData.isHelp.appOpend ? <Modal data={{ innerData: 'Help' }} /> : ''}
      {gData.isTrash.appOpend ? <Modal data={{ innerData: 'Trash' }} /> : ''}

      {/* MENU BAR */}
      {gData.isMenu ? <Menu/> : ''}

>>>>>>> 3ada6afaedb0c86461f3ce97da140321d21e0c5c
    </div>
  );
}

export default BodyContainer;
