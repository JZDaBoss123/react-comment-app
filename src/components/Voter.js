import React, { useState } from "react";
import s from "styled-components";

const WrapperButton = s.button`
    background-color: yellow;
    color: red;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }`;

const WrapperButton2 = s.button`
  background-color: black;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}`;

const Voter = (props = null) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Score = {count}</p>
      <WrapperButton>
        <WrapperButton2>
      <button onClick={() => setCount(count + 1)}>Like</button>
      </WrapperButton2>
      <WrapperButton2>
      <button onClick={() => setCount(count - 1)}>Dislike</button>
      </WrapperButton2>
      </WrapperButton>
    </>
  );
};

export default Voter;
