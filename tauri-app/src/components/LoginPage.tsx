import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>Login Page</h2>
      <button onClick={() => navigate("/")}>Back to home</button>
    </>
  );
};

export default LoginPage;
