import { useContext } from 'react';
import { GlobalData } from '../../App';
import './Menu.css';

function Menu(){
    let gData = useContext(GlobalData);

    return(
        <div className='menu-main-container'></div>
    );
}

export default Menu;