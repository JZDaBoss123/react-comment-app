import React from "react";

import PostList from "./PostList";
import s from "styled-components";

const Wrapper = s.div`
    margin-bottom: 1rem;
    background-color: green;
    background-repeat: no-repeat
    background-image: radial-gradient(green, blue);
    `;

const Wrapperh1 = s.h1`
    color: blue;
    text-align: center
`;
const App = () => (
  <div>
    <Wrapper>
      <Wrapperh1>
        <h1>React Comment App</h1>
      </Wrapperh1>
    </Wrapper>
    <PostList />
  </div>
);
export default App;
