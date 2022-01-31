import './Account.css';
import { RiAccountBoxFill } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import { GlobalData } from '../../App';
import { useContext } from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import react from 'react';
import NewAccount from './NewAccount';
function Account() {
  let gData = useContext(GlobalData)
  let inputUserName = react.createRef();
  return (
    <>
      {!gData.accountData.isNewAccount ? (
        <div className='AccountMain-Container'>
          <div className='loginBox'>
            <div className='AccountName_logo_user_name'>
              <div className='accountLogo'>
                <RiAccountBoxFill />
              </div>
              {gData.accountData.editOpened ? (
                <div className='inputContainer'>
                  <input
                    ref={inputUserName}
                    placeholder='Username'
                    type='text'
                    autoFocus
                    onFocus={(e) => {
                      e.target.select();
                    }}
                  />
                  <div className='inputContainerIconDiv'>
                    <BsFillPatchCheckFill
                      onClick={() => {
                        gData.setAccountData({
                          ...gData.accountData,
                          editOpened: false,
                          userName: inputUserName.current.value
                            ? inputUserName.current.value
                            : 'Yojan Gandha',
                        });
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className='userName'>
                  {gData.accountData.userName}{' '}
                  <FaRegEdit
                    onClick={() => {
                      gData.setAccountData({
                        ...gData.accountData,
                        editOpened: true,
                      });
                    }}
                  />
                </div>
              )}
            </div>
            <div className='passwordContainer'>
              <div className='passwordText'>Password</div>
              <div className='inputContainer passwordInputContainer'>
                <input
                  placeholder='Password'
                  type={gData.accountData.passView ? 'text' : 'password'}
                  name=''
                  id=''
                />
                <div className='inputContainerIconDiv showPass'>
                  {gData.accountData.passView ? (
                    <BsEye
                      onClick={() => {
                        gData.setAccountData({
                          ...gData.accountData,
                          passView: false,
                        });
                      }}
                    />
                  ) : (
                    <BsEyeSlash
                      onClick={() => {
                        gData.setAccountData({
                          ...gData.accountData,
                          passView: true,
                        });
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className='buttonContainer'>
              <div className='buttonLogin'>Unlock</div>
              <div
                className='buttonLogin newAccount'
                onClick={() => {
                  gData.setAccountData({
                    ...gData.accountData,
                    isNewAccount: true,
                  });
                }}
              >
                Create Account
              </div>
            </div>
            <div className='loginAdminText'>Login as Admin</div>
          </div>
        </div>
      ) : (
        <NewAccount />
      )}
    </>
  );
}
export default Account;
