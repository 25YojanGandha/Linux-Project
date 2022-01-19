import "./Modal.css";
import minimize from './images/minimize.png';
import maximize from './images/maximize.png';
import close from './images/close.png';
import { useState, useEffect, createRef } from "react";

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

    return(
        <div className="modal-container" ref={modalContainer}>
            <div className="modal-title">
                <div className="application-headline">Application</div>

                <div className="controls">
                    <span onClick={(cstate)=>{
                        setState(cstate=1);
                        // console.log(cstate,this);
                    }}> <img src={minimize} alt="minimize"/> </span>

                    <span onClick={(cstate)=>{
                        setState(cstate=2);
                        // console.log(cstate);
                    }}><img src={maximize} alt="maximize"/></span>

                    <span onClick={(cstate)=>{
                        setState(cstate=3);
                        // console.log(cstate);
                    }}><img src={close} alt="close"/></span>
                </div>
            </div>

            <div className="modal-base">

            </div>
        </div>
    );
}

export default Modal;