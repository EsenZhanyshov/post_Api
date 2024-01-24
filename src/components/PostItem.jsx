import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ name, phone, id }) => {
  return (
    <div className="item">
      <h3>{name}</h3>
      <h5>{phone}</h5>
      <Link to={`/details/${id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default PostItem;
