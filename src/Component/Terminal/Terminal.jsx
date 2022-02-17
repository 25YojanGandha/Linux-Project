import react from 'react';
import { useContext, createRef, useState } from 'react';
import { GlobalData } from '../../App';

import './Terminal.css';
function Terminal() {
  let gData = useContext(GlobalData);
  let [commandArr, setCommandArr] = useState([]);
 let [dummieState, setDummieState] = useState(false);
  let [commandAllArr, setCommandAllArr] = useState(['clear','meet','appstore']);
  let terminalInput = createRef();
 let checkCommand = (command) => {
  if (commandAllArr.includes(command)) {
   if (command.toLowerCase() === 'clear') {
    setCommandArr([])
   }
   if (command.toLowerCase() === 'meet') {
     setTimeout(() => {
      console.log(gData);
     gData.handleDockApp('Meet', gData);
    },1000)
   }
   if (command.toLowerCase() === 'appstore') {
    setTimeout(() => {
     gData.handleDockApp('Appstore', gData);
    },1000)
   }
    
    return true;
  } else {
    return false;
  }
   
  };
  return (
    <>
    <div className='terminalBody'>
        {[...commandArr, { command:''}].map((e) => {
          return (
            <>
              <div className='terminalLine'>
                <div className='preTerminal-text-account'>
                  <label className='terminal_AccountName'>
                    yojan@linux-desktop
                  </label>
                  <label className='terminal_Colon'>:</label>
                  <label className='terminal_Tilde_operato'>~</label>
                  <label className='terminal_Dollar'>$</label>
                </div>
                {e.command ? (
                  <input
                    // ref={terminalInput}
                    className='terminal_editable_command'
                    readOnly
                    value={e.command}
                  ></input>
                ) : (
                  <input
                    ref={terminalInput}
                    autoFocus
                className='terminal_editable_command'
                    onKeyUp={(e) => {
                     if (e.key === 'Enter') {
                      //  console.log(terminalInput);
                        commandArr.push({
                          command: terminalInput.current.value,
                        });

                        setDummieState(!dummieState);
                      }
                    }}
                  ></input>
                )}
              </div>
              {checkCommand(e.command.trim()) || e.command === '' ? (
                ''
              ) : (
                <div className='terminalCommandGuideLine'>
                  {console.log('a')}
                  <div className='terminal_guide_line1'>
                    Command '{e.command}' not found or not yet implemented
                    <br />
                    Available Commands : <br />
                    <div className='terminal_command_helpSection'>
                      <div className='terminal_command_name'>
                        <div className='terminal_inner_command_line'>
                          AppName
                        </div>
                        <div className='terminal_inner_command_line'>Clear</div>
                      </div>
                      <div className='terminal_command_Info'>
                        <div className='terminal_inner_command_line'>
                          To Open App
                        </div>
                        <div className='terminal_inner_command_line'>
                          To Reset Terminal
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
}

export default Terminal;
