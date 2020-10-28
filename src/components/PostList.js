import React, {useState}  from "react";

import Form from "./Form";
import Posts from './Posts'

const PostList = (props) => {
  const [posts, setPosts] = useState([]);
  const depth = 1
  return (
    <>
      <Form posts={posts} setPosts={setPosts} />
      <ul>
        {posts.map((item) => (
          <Posts item={item} depth = {depth}/>
        ))}
      </ul>
    </>
  );
};

export default PostList;
