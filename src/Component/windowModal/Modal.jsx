import "./Modal.css";
import { useState, createRef, useContext, useEffect } from "react";
import { IoCloseOutline } from 'react-icons/io5';
import { MdFullscreen } from 'react-icons/md';
import { BsDash } from 'react-icons/bs';
import { GlobalData } from "../../App";


function Modal(props) {
  let gData = useContext(GlobalData);
  let [cstate,setState] = useState(0);
  let modalContainer = createRef();

  useEffect(() => {
    gData['is' + props.data.innerData] = {
      ...gData['is' + props.data.innerData],
      windowModal: modalContainer
    }; 
  });

  function dragAndDrop(div){
    // console.log(div);
    // div.onmousedown = function(event) {

    //     let shiftX = event.clientX - div.getBoundingClientRect().left;
    //     let shiftY = event.clientY - div.getBoundingClientRect().top;
      
    //     div.style.position = 'absolute';
    //     div.style.zIndex = 1000;
    //     // document.body.append(div);
      
    //     moveAt(event.pageX, event.pageY);
      
    //     // moves the div at (pageX, pageY) coordinates
    //     // taking initial shifts into account
    //     function moveAt(pageX, pageY) {
    //       div.style.left = pageX - shiftX + 'px';
    //       div.style.top = pageY - shiftY + 'px';
    //     }
      
    //     function onMouseMove(event) {
    //       moveAt(event.pageX, event.pageY);
    //     }
      
    //     // move the div on mousemove
    //     // document.addEventListener('mousemove', onMouseMove);
      
    //     // drop the div, remove unneeded handlers
    //     div.onmouseup = function() {
    //       document.removeEventListener('mousemove', onMouseMove);
    //       div.onmouseup = null;
    //     };
      
      // };
  }

  return (
    <div
      className='modal-container'
      ref={modalContainer}
      style={
        props.data.innerData === gData.currentApp[0] ? { zIndex: '100' } : { zIndex:'0'}
      }
    >
      <div className='modal-title' onClick={dragAndDrop(modalContainer)}>
        <div className='application-headline'>{props.data.innerData}</div>

        <div className='controls'>

          <span
            onClick={() => {

              gData['set' + props.data.innerData]({
                ...gData['is' + props.data.innerData],
                minimize: true,
              });
              
              gData[
                'is' + props.data.innerData
              ].windowModal.current.style.display = 'none';

              let newArr = gData.currentApp.filter((ele) => {
                return ele !== props.data.innerData;
              });
              gData.setCurrentApp([...newArr]);

            }}

          >
            <BsDash />
          </span>

          <span
            className='fullscreenSpan'
            onClick={() => {
              console.log(cstate);
              if (cstate === 0) {
                setState(2);
                modalContainer.current.style.height = '100%';
                modalContainer.current.style.width = '100%';
                modalContainer.current.style.borderRadius = '0px';
              } else if (cstate === 2) {
                setState(0);
                modalContainer.current.style.height = '';
                modalContainer.current.style.width = '';
                modalContainer.current.style.borderRadius = '';
              }
            }}
          >
            <MdFullscreen />
          </span>

          <span
            className='closeSpan'
            onClick={() => {
              gData['set' + props.data.innerData]({
                ...gData['is' + props.data.innerData],
                appOpend: false,
              });
                let newArr = gData.currentApp.filter((ele) => {
                  return ele !== props.data.innerData;
                });
                gData.setCurrentApp([...newArr]);
            }}
          >
            <IoCloseOutline />
          </span>

        </div>

      </div>

      <div className='modal-base'></div>
    </div>
  );
}

export default Modal;