import { useContext, useState } from 'react';
import { GlobalData } from '../../App';
import './Menu.css';
import { Input } from '@nextui-org/react';

function Menu() {
    let gData = useContext(GlobalData);
    let [applicationsArray, setapplicationsArray] = useState(['Browser', 'Camera', 'Gallery', 'Clock', 'Terminal', 'Account', 'Appstore', 'Help', 'Powerpoint', 'Settings', 'Meet', 'Drive', 'Game', 'Calender', 'Maps', 'Weather','Musicplayer','Hillclimb']);

    return (
        <div className='menu-main-container'>
            <div className='menu-search-bar'>
                <input type="text" placeholder='Search'/>
                {/* <Input
                    clearable
                    bordered
                    color="primary"
                    labelPlaceholder="Loading..."
                    // contentRight={<Loading size="xs" />}
                /> */}
            </div>
            <div className='menu-app-container'>

                {applicationsArray.map((appName) => {
                    return <div className='app-container-card'>
                        <img src={`./images/${appName}.png`} alt={appName} />
                        <div className='app-text'>{appName}</div>
                    </div>;
                })}

            </div>
        </div>
    );
}

export default Menu;