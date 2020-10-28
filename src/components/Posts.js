import React, { useState } from "react";

import Voter from "./Voter";
import Form from "./Form";
import s from "styled-components";

const Wrapper = s.div`
    margin-bottom: 1rem;
    background-color: blue;
    background-repeat: no-repeat
    background-image: radial-gradient(green, blue);
    `;

const Wrapper3 = s.div`
    margin-bottom: 1rem;
    background-color: black;
    background-repeat: no-repeat
    background-image: radial-gradient(green, blue);
    `;

const Wrappert3 = s.h1`
    color: yellow;
    text-align: center
`;

const Wrapperh1 = s.h2`
    color: blue;
`;

const WrapperButton = s.button`
    background-color: Green;
    color: red;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }`;

const Posts = (props) => {
  const { item, depth } = props;
  const [replying, setReplying] = useState(false);
  const [replies, setReplies] = useState([]);
  const childDepth = depth + 1;

  console.log(replying);
  if (depth === 3) {
    return (
      <Wrapper3>
        <Wrappert3>
        <>
          {item}
          <Voter />
        </>
        </Wrappert3>
      </Wrapper3>
    );
  } else if (replying) {
    return (
      <>
      <Wrapperh1>
        {item}
        <Voter />
        <Form posts={replies} setPosts={setReplies} setReplying={setReplying} />
        <ul>
          {replies.map((item) => (
            <Posts item={item} depth={childDepth} />
          ))}
        </ul>
        </Wrapperh1>
      </>
    );
  } else {
    return (
      <>
      <Wrapperh1>
        {item}
        <Voter />
        <br></br>
        <Wrappert3>
        <WrapperButton>
        <button onClick={() => setReplying(true)}>Reply</button>
        </WrapperButton>
        </Wrappert3>
        <ul>
          {replies.map((item) => (
            <Posts item={item} depth={childDepth} />
          ))}
        </ul>
        </Wrapperh1>
      </>
    );
  }
};

export default Posts;
