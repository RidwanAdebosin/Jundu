import { Link, useNavigate } from "react-router-dom";
import "./LogIn.css";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, setEmail, setPassword } from "../../Utils/Store/userSlice";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const navigate = useNavigate();
  //   if (!email || !password) return;

  const ToggleEye = () => {
    setShowPassword(!showPassword);
  };

  const handleUserForm = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    dispatch(loginUser());
    navigate("/");
  };

  return (
    <div className="Login_Card">
      <h2>Login</h2>
      <form onSubmit={handleUserForm}>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        <div>
          <input
            placeholder="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
          {showPassword ? (
            <IoEyeOff onClick={ToggleEye} />
          ) : (
            <IoEye onClick={ToggleEye} />
          )}
        </div>
        <button>Login</button>
      </form>
      <p>
        You do not have an account?{" "}
        <span>
          <Link to="/register">Sign Up</Link>
        </span>
      </p>
    </div>
  );
};

export default LogIn;
