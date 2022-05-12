import React from "react";
import { useNavigate } from "react-router-dom";

const buttonStyles = {
  fontSize: "40px",
  padding: 15,
  borderRadius: "16px",
  backgroundColor: "white",
};

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>Home</h2>
      <div
        style={{
          display: "flex",
          gap: 15,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <button style={buttonStyles} onClick={() => navigate("/login")}>
          Login
        </button>
        <button style={buttonStyles} onClick={() => navigate("/scan")}>
          Scan
        </button>
        <button style={buttonStyles} onClick={() => navigate("/code")}>
          Code
        </button>
      </div>
    </>
  );
};

export default HomePage;
