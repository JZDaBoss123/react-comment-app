import React, { useState } from "react";
import s from "styled-components";

const Wrapper = s.div`
    margin-bottom: 1rem;
    background-color: blue;
    background-repeat: no-repeat
    background-image: radial-gradient(green, blue);
    `;

const Wrapperh2 = s.h2`
    color: red;
    text-align: center
`;

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

const Form = (props) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const { posts, setPosts, setReplying } = props;

  return (
    <Wrapper>
      <Wrapperh2>
        <h2>Name</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <h2>Text</h2>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
        <br></br>
        <WrapperButton>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (name.length > 0 && text.length > 0) {
                  const copy = posts.slice();
                  copy.push([name, ": ", text]);
                  setPosts(copy);
                  if (setReplying) {
                    setReplying(false);
                  }
                } else {
                  return;
                }
              }}
            >
              Submit
            </button>
          </div>
        </WrapperButton>
      </Wrapperh2>
    </Wrapper>
  );
};

export default Form;
