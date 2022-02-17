import './AppStore.css';
import { BsStars } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FiMusic } from 'react-icons/fi';
import { IoLogoGameControllerB } from 'react-icons/io';
import { MdDeveloperBoard } from 'react-icons/md';
import { BsChatRightFill } from 'react-icons/bs';
import { BiNotepad } from 'react-icons/bi';
import { GiPalette } from 'react-icons/gi';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { GlobalData } from '../../App';
import { useContext, useState } from 'react';
import SingleAppData from './SingleAppData';

function AppStore() {
  let gData = useContext(GlobalData)
  let [singleAppData,setSingleAppData] = useState({appClicked:false,appName:''})
  return (
    <>
      {!singleAppData.appClicked ? (
        <div className='AppStoreBody'>
          <div className='appBody-banner'>
            <div className='accountPic-container'>
              <div className='imgContainer'></div>
            </div>
            <div className='textContainer'>
              <div className='appStore-banner-text1'>Yojan Gandha</div>
              <div className='appStore-banner-text2'>
                <BsStars />  MERN / MEAN Full Stack Developer
              </div>
            </div>
            <div className='appStorebuttonContainer'>
              <div className='appStoreBtn-div-container_1'>
                <a
                  href='https://www.buymeacoffee.com/arpitmaurya'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
                    alt='Buy Me A Coffee'
                  ></img>
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
          <div className='appStore-gridContainer'>
            <div className='aapStore-categories'>
              <div className='appStore-categories-headText'>Categories</div>
              <div className='appStore-categories-boxContainer'>
                <div className='appStore-categories-inner-boxContainer'>
                  <div className='appStore-categories-innerBox'>
                    <div className='appStore-categories-iconAndText'>
                      <div className='appStore-categories-boxicon'>
                        <FiMusic />
                      </div>
                      <div className='appStore-categories-boxtext'>
                        Audio & Music
                      </div>
                    </div>
                    <div className='appStore-categories-colorBox musicAppStore'></div>
                  </div>
                  <div className='appStore-categories-innerBox'>
                    <div className='appStore-categories-iconAndText'>
                      <div className='appStore-categories-boxicon'>
                        <BsChatRightFill />
                      </div>
                      <div className='appStore-categories-boxtext'>
                        Comunications & News
                      </div>
                    </div>
                    <div className='appStore-categories-colorBox newsComunicationAppStore '></div>
                  </div>
                  <div className='appStore-categories-innerBox'>
                    <div className='appStore-categories-iconAndText'>
                      <div className='appStore-categories-boxicon'>
                        <BiNotepad />
                      </div>
                      <div className='appStore-categories-boxtext'>
                        Productivity
                      </div>
                    </div>
                    <div className='appStore-categories-colorBox  productivityAppStore'></div>
                  </div>
                </div>
                <div className='appStore-categories-inner-boxContainer'>
                  <div className='appStore-categories-innerBox'>
                    <div className='appStore-categories-iconAndText'>
                      <div className='appStore-categories-boxicon'>
                        <IoLogoGameControllerB />
                      </div>
                      <div className='appStore-categories-boxtext'>Games</div>
                    </div>
                    <div className='appStore-categories-colorBox gamesAppStore'></div>
                  </div>
                  <div className='appStore-categories-innerBox'>
                    <div className='appStore-categories-iconAndText'>
                      <div className='appStore-categories-boxicon'>
                        <GiPalette />
                      </div>
                      <div className='appStore-categories-boxtext'>
                        Graphics & Photography
                      </div>
                    </div>
                    <div className='appStore-categories-colorBox graphicsPhotographyAppStore'></div>
                  </div>
                  <div className='appStore-categories-innerBox'>
                    <div className='appStore-categories-iconAndText'>
                      <div className='appStore-categories-boxicon'>
                        <MdDeveloperBoard />
                      </div>
                      <div className='appStore-categories-boxtext'>
                        Developer Tools
                      </div>
                    </div>
                    <div className='appStore-categories-colorBox developerToolsAppStore'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='appStore-categories-line'></div>
            <div className='appStore-categories-headText'>Recent Releases</div>
            <div className='appStore_AppDivContainer'>
              {gData.applicationsAppStoreArray.map((appName) => {
                return (
                  <div
                    className='appStore_app_innerBox'
                    onClick={() => {
                      setSingleAppData({
                        ...singleAppData,
                        appClicked: true,
                        appName: appName,
                      });
                    }}
                  >
                    <div className='appStoreApp_icon'>
                      <img src={`./images/${appName}.png`} alt='' />
                    </div>
                    <div className='appStoreApp_text'>{appName}</div>
                    <div className='appStoreApp_star'>
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarHalf />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='workAsMargin'></div>
          </div>
        </div>
      ) : (
        <SingleAppData data={{ singleAppData, setSingleAppData }} />
      )}
    </>
  );
}

export default AppStore;
