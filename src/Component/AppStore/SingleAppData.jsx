import './SingleAppStore.css'
import { GlobalData } from '../../App';
import { useContext} from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';

function SingleAppData(props) {
 let gData = useContext(GlobalData);
 let propsData = props.data;

 let handleInstallApp=(appData,golabInfo)=>{
   
  if(!appData.isInstalled){
    propsData.setSingleAppData({...propsData,isInstalled: true});
    let newApplicatioArray=[...golabInfo.applicationsArray, appData.appName];
    golabInfo.setApplicationsArray(newApplicatioArray);
  }
 }

 let handleRemoveApp=(appData,golabInfo)=>{
    propsData.setSingleAppData({...propsData,isInstalled: false});
    let newApplicatioArray=golabInfo.applicationsArray.filter(function(value){ 
      return appData.appName!=value;
    });
    golabInfo.setApplicationsArray(newApplicatioArray);
 }
 
 return (
   <>
     <div className='singleAppBody'>
       <div className='innerSingleAppData'>
         <div
           className='backBtn_single'
           onClick={() => {
             propsData.setSingleAppData({
               ...propsData.singleAppData,
               appClicked: false,
               appName: '',
             });
           }}
         >
           <IoIosArrowBack />
         </div>
         <div className='singleData_appTitleContainer'>
           <div>
             {' '}
             <div className='singleDataIconContainer'>
               <img
                 src={`./images/${propsData.singleAppData.appName}.png`}
                 alt=''
               />
             </div>
             <div className='singleData_headTitle_textCotainer'>
               <div className='singleData_headTitle_text1'>
                 {propsData.singleAppData.appName}
               </div>
               <div className='singleData_headTitle_text2'>
                 Created By Arpit Maurya And Yojan Gandha
               </div>
             </div>
           </div>
           <div className='singleData_head_starContainer'>
             <div className='appStoreApp_star'>
               <BsStarFill />
               <BsStarFill />
               <BsStarFill />
               <BsStarFill />
               <BsStarHalf />
               <label>(4)</label>
             </div>
           </div>
         </div>
         <div className='singleData_Container_buttons'>
           <div className='button_install_or_uninstall singleData_install_color' onClick={()=>{handleInstallApp(propsData.singleAppData,gData)}}>
             {propsData.singleAppData.isInstalled?"Installed":"Install"}
           </div>
           {propsData.singleAppData.isInstalled?<div className='button_remove  removeBtnSingleData' onClick={()=>{handleRemoveApp(propsData.singleAppData,gData)}}>Remove</div>:""}
         </div>

         <div className='appSingleData_appImgContainer'>
           <img
             src={`./images/${propsData.singleAppData.appName}_banner.png`}
             alt=''
           />
         </div>
         <div className='singleData_appDescription_box'>
           A web browser (commonly referred to as a browser) is application
           software for accessing the World Wide Web. When a user requests a web
           page from a particular website, the web browser retrieves the
           necessary content from a web server and then displays the page on the
           user's device.
         </div>
         <div className='singleData_Container_buttons'>
           <div className='button_install_or_uninstall  singleData_website_btn'>
             Website
           </div>
         </div>
         <div className='singledata_DetailsText'>Details</div>
         <div className='sigleData_Details_Data_Box'>
           <div className='singleData_innerBox'>
             <div className='singleData_innerBox_leftText'>Version</div>
             <div className='singleData_innerBox_rightText'>3.0.1</div>
           </div>
           <div className='singleData_innerBox'>
             <div className='singleData_innerBox_leftText'>Updated</div>
             <div className='singleData_innerBox_rightText'>Never</div>
           </div>
           <div className='singleData_innerBox'>
             <div className='singleData_innerBox_leftText'>Category</div>
             <div className='singleData_innerBox_rightText'>browser</div>
           </div>
           <div className='singleData_innerBox singleDataLicense'>
             <div className='singleData_innerBox_leftText'>License</div>
             <div className='singleData_innerBox_rightText'>
               <div className='licenseBox'>Free</div>
             </div>
           </div>
           <div className='singleData_innerBox'>
             <div className='singleData_innerBox_leftText'>Developer</div>
             <div className='singleData_innerBox_rightText'>
               Arpit Maurya & Yojan Gandha
             </div>
           </div>
           <div className='singleData_innerBox'>
             <div className='singleData_innerBox_leftText'>Source</div>
             <div className='singleData_innerBox_rightText'>
               ubuntu-disco-main
             </div>
           </div>
         </div>
         <div className='singleData_Container_buttons'>
           <div className='button_install_or_uninstall  singleData_review_btn'>
             Write a Review
           </div>
         </div>
         <div className='singleData_reviewBox'>
           <div className='sd-review-star_name_date_box'>
             <div>
               <div className='appStoreApp_star sd-review-starBox'>
                 <BsStarFill />
                 <BsStarFill />
                 <BsStarFill />
                 <BsStarFill />
                 <BsStarHalf />
               </div>
               <div className='sd-reviewName'>Yojan Gandha</div>
             </div>
             <div className='reviewDataBox'>02 Feb 2021</div>
           </div>
           <div className='sd-reviewContent'>
             Excellent, working with web designer express was great. Thanks to
             their knowledge and determination our website looks great and
             functions really good. I am recommend anyone that is looking for a
             custom website to give them a call and speak to Gus, he will guide
             you to the right direction.
           </div>
         </div>
         <div className='singleData_reviewBox'>
           <div className='sd-review-star_name_date_box'>
             <div>
               <div className='appStoreApp_star sd-review-starBox'>
                 <BsStarFill />
                 <BsStarFill />
                 <BsStarFill />
                 <BsStarFill />
                 <BsStarHalf />
               </div>
               <div className='sd-reviewName'>Arpit Maurya</div>
             </div>
             <div className='reviewDataBox'>02 Feb 2021</div>
           </div>
           <div className='sd-reviewContent'>
             Excellent, working with web designer express was great. Thanks to
             their knowledge and determination our website looks great and
             functions really good. I am recommend anyone that is looking for a
             custom website to give them a call and speak to Gus, he will guide
             you to the right direction.
           </div>
         </div>
         <div className='workAsMargin'></div>
       </div>
     </div>
   </>
 );
}

export default SingleAppData