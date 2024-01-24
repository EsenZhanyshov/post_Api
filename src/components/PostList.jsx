import React, { useContext, useEffect } from "react";
import { postContext2 } from "../context/PostContext";
import PostItem from "./PostItem";

const PostList = () => {
  const { users, getPosts } = useContext(postContext2);
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="list">
      {users.map((elem) => (
        <PostItem {...elem} key={elem.id} />
      ))}
    </div>
  );
};

export default PostList;
