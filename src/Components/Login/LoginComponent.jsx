import React, { useState } from 'react';
import {
  Center,
  Container
} from '@chakra-ui/react';

import SignUp from './SignUpComponent';
import SignIn from './SignInComponent';

export const Login = () => {

  const [dataToSend, setDataToSend] = useState({avatar: 'https://avatars.githubusercontent.com/u/89946236?v=4', email: '', password: '', password2: '', name: '', lastName: ''});
  const [hasError, setHasError] = useState({ name: false, lastName: false, email: false, password: false, password2: false });
  const [isRegistering, setIsRegistering] = useState(false)

  const loginFunctions = {
    
    handleOnChange: (e) => {
      setDataToSend({
        ...dataToSend,
        [e.target.name]: e.target.value
      });
    },

    checkInputs: (dataToSend) => {
      const errorsToRender = {}
      if(isRegistering) {
        const { email, password, password2, name, lastName } = dataToSend;
        if(!name || name === '' || name.match(/^ *$/) !== null) errorsToRender.name = true;
        if(!lastName || lastName === '' || lastName.match(/^ *$/) !== null) errorsToRender.lastName = true;
        if(!email || email === '' || !email.includes('@') || !email.includes('.com')) errorsToRender.email = true;
        if(!password || name === '' || password.match(/^ *$/) !== null) errorsToRender.password = true
        else if (password !== password2) errorsToRender.password2 = true
      } else {
        const { email } = dataToSend;
        if(!email || email === '' || !email.includes('@') || !email.includes('.com')) errorsToRender.email = true;
      }
      setHasError(errorsToRender);
      return errorsToRender;
    },

    changeFormMode: () => {
      setIsRegistering(!isRegistering);
    }
    
  };




  return(
  <Center
  h='100vh'
  >
    <Container
    >
      {isRegistering ?
      <SignUp hasError={hasError} dataToSend={dataToSend} {...loginFunctions}/>
      :
      <SignIn hasError={hasError} dataToSend={dataToSend} {...loginFunctions}/>
      }
    </Container>
  </Center>
)};