import React from "react";
import { useNavigate } from "react-router-dom";

const ScanPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>Scan Page</h2>
      <button onClick={() => navigate("/")}>Back to home</button>
    </>
  );
};

export default ScanPage;
