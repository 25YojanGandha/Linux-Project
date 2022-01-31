import './NewAccount.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { GlobalData } from '../../App';
import { useContext } from 'react';
function NewAccount() {
 
 let gData = useContext(GlobalData);
 
  return (
    <>
      <div className='newAccountBody'>
        <div className='whoAreYouText'>Who are you?</div>
        <div className='newAccountContentArea'>
          <div className='newAcocunt-contentLeft'>
            <div className='n-a-text-container'> Your Name:</div>
            <div className='n-a-text-container'> Your computer's Name:</div>
            <div className='n-a-text-container'> Pick a username:</div>
            <div className='n-a-text-container'> Gmail Account:</div>
            <div className='n-a-text-container'> Choose a password:</div>
            <div className='n-a-text-container'> Confirm your password:</div>
          </div>
          <div className='newAcocunt-contentRight'>
            <div className='n-a-input-container n-a-yourName'>
              <input type='text' />
              <div className='n-a-iconContainer'>
                <BsFillPatchCheckFill />
              </div>
            </div>
            <div className='n-a-input-container n-a-computerName'>
              <input type='text' />
              <div className='n-a-iconContainer'>
                <BsFillPatchCheckFill />
              </div>
            </div>
            <div className='n-a-input-container n-a-pickUserName'>
              <input type='text' />
              <div className='n-a-iconContainer'>
                <BsFillPatchCheckFill />
              </div>
            </div>
            <div className='n-a-input-container n-a-yourName'>
              <input type='text' />
              <div className='n-a-iconContainer'>
                <BsFillPatchCheckFill />
              </div>
            </div>
            <div className='n-a-input-container n-a-password'>
              <input type='password' placeholder='Password' />
              <div className='n-a-iconContainer'>
                <BsFillPatchCheckFill />
              </div>
            </div>
            <div className='n-a-input-container n-a-password'>
              <input type='password' placeholder='Password' />
              <div className='n-a-iconContainer'>
                <BsFillPatchCheckFill />
              </div>
            </div>

            <div className='n-a-input-container n-a-permissionPassword'>
              <input type='radio' checked />
              Require my password to log in
            </div>
            <div className='n-a-input-container n-a-buttons'>
              <div
                className='n-a-Back'
                onClick={() => {
                  gData.setAccountData({
                    ...gData.accountData,
                    isNewAccount: false,
                  });
                }}
              >
                Back
              </div>
              <div className='n-a-Back'>Continue</div>
            </div>
          </div>
        </div>
        <div className='newAccountLoadingArea'>
          <div className='n-a-loading-dot'></div>
          <div className='n-a-loading-dot'></div>
          <div className='n-a-loading-dot'></div>
          <div className='n-a-loading-dot'></div>
        </div>
      </div>
    </>
  );
}

export default NewAccount;
