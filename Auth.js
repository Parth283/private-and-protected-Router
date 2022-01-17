import React from "react";
import { useNavigate } from "react-router-dom";

function Auth({ auth }) {
  const navigate = useNavigate();
  function login() {
    auth();
    navigate("dashboard");
  }

  return (
    <div>
      Authentication Page
      <br />
      <button onClick={login}>login</button>
    </div>
  );
}

export default Auth;
