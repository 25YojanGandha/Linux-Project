import "./SignUp.css";
import ulogo from './images/ubuntu-logo.png'
// import { RiAccountCircleLine } from "react-icons/ri";

function SignUp(){
    return (
       <div className="signUp-container">
            <div class="signUp">

                <div className="user-data">

                    <img src={ulogo} alt="" />
                    Ubuntu
                     
                </div>
                
                <div className="main-wrapper">
                    <div className="wrapper">
                        <div className="user text">User Name:</div>
                        <input type="text"/>
                    </div>

                    <div className="wrapper"> 
                        <div className="password text">Password:</div>
                        <input type="password"/>
                    </div>

                    <div className="utility">
                        <button className="cancel">Cancel</button>
                        <button className="unlock">Forget Password</button>
                    </div>

                    <div className="display text">Log in as root user</div>
                </div>

            </div>
       </div>
    );
}


export default SignUp;