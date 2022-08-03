import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../../Contexts/UserAuthContext";
import "./LoginForm.scss";
import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsFacebook } from "react-icons/bs";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {
    user,
    signIn,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
  } = userAuth();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (error) {
      const errorCode = error.code.split("auth/")[1];
      setErrorMessage(errorCode);
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithGoogle();
      navigate("/home");
    } catch (error) {
      setErrorMessage("Login Failed! Try Again");
    }
  };

  const handleFacebookLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithFacebook();
      navigate("/home");
    } catch (e) {
      setErrorMessage("Login Failed! Try Again");

    }
  };

  const handleGithubLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithGithub();
      navigate("/home");
    } catch (e) {
      setErrorMessage("Login Failed! Try Again");

    }
  };

  return (
    <form className="login-form form">
      <div className="wrapper">
        <h2 className="form-heading">sign in</h2>
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
        <span className="error-text error-message">
          {errorMessage && errorMessage}
        </span>
        <button className="submit-btn" onClick={handleLogin}>
          sign in
        </button>
        <p className="other-account-text">
          <span>or sign in with</span>
        </p>
        <div className="social-media-accounts">
          <button onClick={handleGoogleLogin}>
            <FcGoogle style={{ marginRight: "8px", fontSize: "1.6em" }} />
            google
          </button>
          <button onClick={handleFacebookLogin}>
            <BsFacebook
              style={{
                marginRight: "8px",
                color: "#4267B2",
                fontSize: "1.6em",
              }}
            />
            facebook
          </button>
          <button onClick={handleGithubLogin}>
            <BsGithub
              style={{ marginRight: "8px", color: "171515", fontSize: "1.6em" }}
            />
            github
          </button>
        </div>
        <p className="account-text">
          don't have an account? <Link to="/register">sign up</Link>
        </p>
        {/* <Link to="/register">Go to register page</Link> */}
      </div>
    </form>
  );
}

export default LoginForm;

{
  /* <input
value={email}
onChange={(e) => setEmail(e.target.value)}
type="email"
/> 

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
*/
}
