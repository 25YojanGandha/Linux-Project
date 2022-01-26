import { useContext, useState } from 'react';
import { GlobalData } from '../../App';
import './Menu.css';

function Menu() {
    let gData = useContext(GlobalData);
    let [applicationsArray, setapplicationsArray] = useState(['Browser','Browser','Browser', 'Clock', 'Terminal','Account','Appstore','Help','Help','Help','Meet','Drive','Game','Settings']);

    return (
        <div className='menu-main-container'>
            <div className='menu-search-bar'>
                {/* <input type="text" /> */}
                
            </div>
            <div className='menu-app-container'>

                {applicationsArray.map((appName) => {
                    return <div className='app-container-card'>
                        <img src={`./images/${appName}.png`} alt={appName} />
                        <div>{appName}</div>
                    </div>;
                })}

            </div>
        </div>
    );
}

export default Menu;