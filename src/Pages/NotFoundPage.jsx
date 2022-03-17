import React, { useContext, useEffect } from 'react';
import { LoginContext } from 'Context/LoginContext';

import { NotFound } from 'Components/NotFound';

export default function NotFoundPage() {

  const Login = useContext(LoginContext);
  const { userInfo, saveDataFromLogin } = Login;

  useEffect(() => {
    const userInMemory = JSON.parse(localStorage.getItem('userInfo'));
    if(userInMemory || userInfo) saveDataFromLogin(userInMemory)
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return(
    <>
      <NotFound />
    </>
  )
}