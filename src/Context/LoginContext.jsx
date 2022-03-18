import React, { createContext, useEffect, useState } from 'react';

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {

  const [userInfo, setUserInfo] = useState(null);

  const saveDataFromLogin = (info, token) => {
    setUserInfo(info);
    if(token) localStorage.setItem('tokenFlow', JSON.stringify(token));
  }

  const updateUserInfo = (info) => {
    setUserInfo(info);
  }

  const logout = () => {
    localStorage.removeItem('userInfo');
    setUserInfo(null);
  }

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  },[userInfo])

  
  useEffect(() => {
    const userInMemory = JSON.parse(localStorage.getItem('userInfo'));
    if(userInMemory) {
      setUserInfo(userInMemory)
    };
  },[]);


  return(
    <LoginContext.Provider value={{ userInfo, logout, saveDataFromLogin, updateUserInfo }}>
      {children}
    </LoginContext.Provider>
  )
};

export default LoginContextProvider;