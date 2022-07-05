import React, { useState, useEffect } from "react";
import { userAuth } from "../../Contexts/UserAuthContext";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsFacebook } from "react-icons/bs";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, user } = userAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="form">
      <div className="wrapper">
        <h2 className="form-heading">sign up</h2>
        <div className="input-container">
          <div className="input-group">
            <input
              required
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="name"
              placeholder="  "
            />
            <label htmlFor="name">email</label>
          </div>
          <div className="input-group">
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
              placeholder="  "
            />
            <label htmlFor="password">password</label>
          </div>
        </div>
        <button className="submit-btn" onClick={handleRegister}>
          sign up
        </button>
        <p className="account-text">
          already have an account? <Link to="/">sign in</Link>
        </p>
      </div>
    </form>
  );
}

export default RegisterForm;

{
  /* <form>
<input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  type="email"
/>
<input
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  type="password"
/>
<button onClick={handleRegister}>register</button>
</form> */
}
