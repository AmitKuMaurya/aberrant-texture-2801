import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isAuth) {
    navigate("/");
  }
  return children;
};

export default PrivateRoute;
