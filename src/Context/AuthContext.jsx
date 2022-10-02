import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);



  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
