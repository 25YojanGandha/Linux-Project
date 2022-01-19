import "./Modal.css";
import { useState, useEffect, createRef } from "react";
import { IoCloseOutline } from 'react-icons/io5';
import { MdFullscreen } from 'react-icons/md';
import { BsDash } from 'react-icons/bs';

function Modal(){
    // 0- Default State
    // 1- Minimize
    // 2- Maximize
    // 3- Close

    let [cstate,setState] = useState(0);
    let modalContainer = createRef();

    useEffect(() => {
      if (cstate === 1) {
        // console.log(modalContainer.current)

        modalContainer.current.style.display = 'none';
      } else if (cstate === 2) {
        // console.log(modalContainer.current)

        modalContainer.current.style.height = '100vh';
        modalContainer.current.style.width = '100vw';
      } else if (cstate === 3) {
        // console.log(modalContainer.current)

        modalContainer.current.remove();
      }
    }, [cstate, modalContainer]);

    return (
      <div className='modal-container' ref={modalContainer}>
        <div className='modal-title'>
          <div className='application-headline'>Application</div>

          <div className='controls'>
            <span
              onClick={(cstate) => {
                setState((cstate = 1));
                // console.log(cstate,this);
              }}
            >
              <BsDash />
            </span>

            <span
              className="fullscreenSpan"
              onClick={(cstate) => {
                setState((cstate = 2));
              }}
            >
              <MdFullscreen />
            </span>

            <span
                className="closeSpan"
              onClick={(cstate) => {
                setState((cstate = 3));
                // console.log(cstate);
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