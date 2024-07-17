import "./Register.css";
import Button from "../../Utils/Button/Button";
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";

const Register=() => {
    const [showPassword, setShowPassword] = useState(false);

    const ToggleEye = () => {
        setShowPassword(!showPassword)
    }

    
    return(
        <div className="Sign_Card">
            <h2>Sign Up</h2>
            <form>
                <input placeholder="email" type="email" />
                <input placeholder="name" type="text" />
                <input placeholder="date of Birth" type="date" />
                <div>
                <input placeholder="password" type={showPassword ? "text":"password"} />
                {showPassword?<IoEyeOff onClick={ToggleEye}/>: <IoEye onClick={()=>setShowPassword(!showPassword)}/>}
                </div>
                <Button type="submit">Sign Up</Button>
            </form>
            <p>Already have an account? <span><Link to="/login">Log In</Link></span></p>
        </div>
    )
};

export default Register;