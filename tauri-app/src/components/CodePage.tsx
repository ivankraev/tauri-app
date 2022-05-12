import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const inputStyles = {
  outline: "none",
  border: "none",
  fontSize: "25px",
  width: "100%",
};

const CodePage = () => {
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef<any>(null);

  const onChange = (input: string) => {
    setInput(input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setInput(input);
    console.log(keyboard.current);

    keyboard.current?.setInput(input);
  };

  const navigate = useNavigate();
  return (
    <>
      <h2>Code Page</h2>

      <button style={{ marginBottom: "50px" }} onClick={() => navigate("/")}>
        Back to home
      </button>
      <input
        style={inputStyles}
        value={input}
        placeholder={"Tap on the virtual keyboard to start"}
        onChange={onChangeInput}
      />
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </>
  );
};

export default CodePage;
