import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../../Contexts/UserAuthContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signIn } = userAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <form>
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
      <button onClick={handleLogin}>login</button>
      <Link to="/register">Go to register page</Link>
    </form>
  );
}

export default LoginForm;
