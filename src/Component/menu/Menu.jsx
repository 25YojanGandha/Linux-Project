import { useContext } from 'react';
import { GlobalData } from '../../App';
import './Menu.css';

function Menu(){
    let gData = useContext(GlobalData);

    return(
        <div className='menu-main-container'>
            <div className='menu-search-bar'>
                <input type="text" />
            </div>
            <div className='menu-app-container'>
                
            </div>
        </div>
    );
}

export default Menu;