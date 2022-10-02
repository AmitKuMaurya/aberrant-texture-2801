// import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  // const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  console.log(isAuth);

  if (!isAuth) {
    navigate("/");
  }
  return children;
};

export default PrivateRoute;
