import { useContext, createRef, useState, useEffect } from 'react';
import { GlobalData } from '../../App';

import './Terminal.css';
function Terminal() {
  let gData = useContext(GlobalData);
  let [commandArr, setCommandArr] = useState([]);
  let [dummieState, setDummieState] = useState(false);
  let [currentCommandIndex, setCurrentCommandIndex] = useState(-1);
  let [commandAllArr] = useState(['exit', 'clear', 'meet', 'maps', 'appstore']);
  let terminalInput = createRef();

  let executeCommand = (command) => {
    console.log(command);
    if (command === 'clear') {
      setCommandArr([]);
      return;
    }
    if (command === 'exit') {
      gData.isTerminal.windowModal.current.querySelector('.closeSpan').click();
      return;
    }
    if (
      gData.applicationsArray.includes(
        command[0].toUpperCase() + command.slice(1)
      )
    ) {
      let appName = command[0].toUpperCase() + command.slice(1);
      gData.handleDockApp(appName, gData);
      setTimeout(() => {
        gData.handleDockApp(appName, gData);
      }, 500);
      return;
    }
  };
  return (
    <>
      <div className='terminalBody'>
        {[...commandArr, { command: '', onlyForInputCheck: true }].map((e) => {
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
                {!e.onlyForInputCheck || e.command ? (
                  <div className='terminal_inputCommandDisplay'>
                    {e.command}
                  </div>
                ) : (
                  <input
                    ref={terminalInput}
                    autoFocus
                    className='terminal_editable_command'
                    onKeyUp={(e) => {
                      if (e.key === 'ArrowUp') {
                        console.log(commandArr[currentCommandIndex]);
                      }
                      if (e.key === 'Enter') {
                        // console.log(currentCommandIndex);
                        let inputValue = terminalInput.current.value.trim();
                        commandArr.push({
                          command: inputValue,
                        });
                        setDummieState(!dummieState);
                        setCurrentCommandIndex(commandArr.length - 1);
                        if (commandAllArr.includes(inputValue.toLowerCase())) {
                          executeCommand(inputValue.toLowerCase());
                        }
                      }
                    }}
                  ></input>
                )}
              </div>
              {commandAllArr.includes(e.command.toLowerCase()) ||
              e.command === '' ? (
                ''
              ) : (
                <div className='terminalCommandGuideLine'>
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
