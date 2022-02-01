import './AppStore.css';
import { BsStars } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
function AppStore() {
  return (
    <>
      <div className='AppStoreBody'>
        <div className='appBody-banner'>
          <div className='accountPic-container'>
            <div className='imgContainer'></div>
          </div>
          <div className='textContainer'>
            <div className='appStore-banner-text1'>Yojan Gandha</div>
            <div className='appStore-banner-text2'>
              <BsStars /> Aspiring MERN Full Stack
              Developer
            </div>
          </div>
          <div className='appStorebuttonContainer'>
            <div className='appStoreBtn-div-container_1'>
              <a
                href='https://www.buymeacoffee.com/arpitmaurya'
                target='_blank'
                rel='noreferrer'
              >
                <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" ></img>
              </a>
            </div>
            <div className='appStoreBtn-div-container_2'>
              <div className='appStore-btn-github'>
                <BsGithub /> Github
              </div>
              <div className='appStore-btn-linkedln'>
                <BsLinkedin /> Linkedln
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppStore;
