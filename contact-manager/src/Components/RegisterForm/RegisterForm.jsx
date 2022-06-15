import React, { useState, useEffect } from "react";
import { userAuth } from "../../Contexts/UserAuthContext";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = userAuth();
  const navigate = useNavigate();

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
      <button onClick={handleRegister}>register</button>
    </form>
  );
}

export default RegisterForm;
