import React, { useState, useEffect } from "react";
import { userAuth } from "../../Contexts/UserAuthContext";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsFacebook } from "react-icons/bs";
import useForm from "../../hooks/useForm";

function RegisterForm() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [values, setValues] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const { signUp, user } = userAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  });

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await signUp(email, password);
  //     navigate("/home");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleRegister = async (e) => {
    try {
      await signUp(values.email, values.password);
      navigate("/home");
    } catch (error) {
      const errorCode = error.code.split("auth/")[1];
      setErrorMessage(errorCode);
    }
  };

  const { handleSubmit, handleInput, errors } = useForm(
    setValues,
    values,
    handleRegister,
    setErrorMessage
  );

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="wrapper">
        <h2 className="form-heading">sign up</h2>
        <div className="input-container">
          <div className="input-group">
            <input
              required
              type="text"
              value={values.email}
              onChange={handleInput}
              name="email"
              id="name"
              placeholder="  "
            />
            <label htmlFor="name">email</label>
            <span className="error-text">
              {errors.email && `*${errors.email}`}
            </span>
          </div>
          <div className="input-group">
            <input
              required
              type="password"
              value={values.password}
              onChange={handleInput}
              name="password"
              id="password"
              placeholder="  "
            />
            <label htmlFor="password">password</label>
            <span className="error-text">
              {errors.password && `*${errors.password}`}
            </span>
          </div>
        </div>
        <span className="error-text error-message">
          {errorMessage && errorMessage}
        </span>
        <button className="submit-btn">sign up</button>
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
</form> 
*/
}
