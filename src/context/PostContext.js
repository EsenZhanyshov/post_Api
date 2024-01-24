import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";
import { API } from "../helpers/const";
export const postContext2 = createContext();
const PostContext = ({ children }) => {
  const INIT_STATE = {
    users: [],
    user: {},
  };
  const reduser = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_USERS":
        return { ...state, users: action.payload };
      case "GET_ONE_USER":
        return { ...state, user: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reduser, INIT_STATE);
  //! GET
  const getPosts = async () => {
    const { data } = await axios(`${API}/users`);
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
    console.log(data);
  };

  //   //! GET_ONE_TODO
  const getOnePost = async (id) => {
    const { data } = await axios(`${API}/posts?userId=${id}`);
    dispatch({
      type: "GET_ONE_USER",
      payload: data,
    });
    console.log(data);
  };

  const values = {
    users: state.users,
    user: state.user,
    getPosts,
    getOnePost,
  };
  return (
    <postContext2.Provider value={values}>{children}</postContext2.Provider>
  );
};

export default PostContext;
