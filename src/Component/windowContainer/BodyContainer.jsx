import { useContext } from 'react';
import { GlobalData } from '../../App';
import './BodyContainer.css';
import Modal from '../windowModal/Modal';
import Menu from '../menu/Menu';
import Map from '../map/Map';
import Account from '../Account_Component/Account';
import AppStore from '../AppStore/AppStore';

function BodyContainer() {
  let gData = useContext(GlobalData);
  return (
    <div className='BodyContainer'>
      {/* DOCK ICONS MODAL */}
      {gData.isBrowser.appOpend ? (
        <Modal data={{ innerData: 'Browser' }} />
      ) : (
        ''
      )}
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
        <Modal data={{ innerData: 'Appstore', component: <AppStore /> }} />
      ) : (
        ''
      )}
      {gData.isHelp.appOpend ? <Modal data={{ innerData: 'Help' }} /> : ''}
      {gData.isTrash.appOpend ? <Modal data={{ innerData: 'Trash' }} /> : ''}

      {/* MENU ICONS MODAL */}
      {gData.isClock.appOpend ? <Modal data={{ innerData: 'Clock' }} /> : ''}
      {gData.isGallery.appOpend ? (
        <Modal data={{ innerData: 'Gallery' }} />
      ) : (
        ''
      )}
      {gData.isCamera.appOpend ? <Modal data={{ innerData: 'Camera' }} /> : ''}
      {gData.isSettings.appOpend ? (
        <Modal data={{ innerData: 'Settings' }} />
      ) : (
        ''
      )}
      {gData.isMeet.appOpend ? <Modal data={{ innerData: 'Meet' }} /> : ''}
      {gData.isNotepad.appOpend ? (
        <Modal data={{ innerData: 'Notepad' }} />
      ) : (
        ''
      )}
      {gData.isChess.appOpend ? <Modal data={{ innerData: 'Chess' }} /> : ''}
      {gData.isVscode.appOpend ? <Modal data={{ innerData: 'Vscode' }} /> : ''}
      {gData.isCalender.appOpend ? (
        <Modal data={{ innerData: 'Calender' }} />
      ) : (
        ''
      )}
      {gData.isMaps.appOpend ? (
        <Modal data={{ innerData: 'Maps', component: <Map /> }} />
      ) : (
        ''
      )}
      {gData.isHillclimb.appOpend ? (
        <Modal data={{ innerData: 'Hillclimb' }} />
      ) : (
        ''
      )}
      {gData.isWeather.appOpend ? (
        <Modal data={{ innerData: 'Weather' }} />
      ) : (
        ''
      )}
      {gData.isMusic.appOpend ? <Modal data={{ innerData: 'Music' }} /> : ''}
      {gData.isMessage.appOpend ? (
        <Modal data={{ innerData: 'Message' }} />
      ) : (
        ''
      )}

      {/* MENU BAR */}
      {gData.isMenu ? <Menu /> : ''}
    </div>
  );
}

export default BodyContainer;