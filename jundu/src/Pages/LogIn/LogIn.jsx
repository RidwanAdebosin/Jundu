import { Link } from "react-router-dom";
import "./LogIn.css";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";

const LogIn =()=>{
    const [showPassword, setShowPassword] = useState(false);

    const ToggleEye = () => {
        setShowPassword(!showPassword)
    }
    return(
        <div className="Login_Card">
            <h2>Login</h2>
            <form>
                <input placeholder="email" />
                <div>
                <input placeholder="password" type={showPassword? "text":"password"}/>
                {showPassword?<IoEyeOff onClick={ToggleEye}/>: <IoEye onClick={ToggleEye}/>}
                </div>
                <button>Login</button>
            </form>
            <p>You don't have an account? <span><Link to="/register">Sign Up</Link></span></p>
        </div>
    )
}

export default LogIn;




