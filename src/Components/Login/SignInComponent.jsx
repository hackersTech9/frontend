import React, { useState, useContext } from 'react';
import { LoginContext } from 'Context/LoginContext';
import { useNavigate } from 'react-router-dom';
import Global from 'Global';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Stack,
  Button,
  Text,
  Spinner
} from '@chakra-ui/react';

import axios from 'axios';

export default function SignIn({ checkInputs, changeFormMode, handleOnChange, dataToSend, hasError }) {

  const { email, password } = dataToSend;
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const Login = useContext(LoginContext);
  const { saveDataFromLogin } = Login;

  const signIn = async () => {
    setIsLoading(true);
    const errors = checkInputs(dataToSend);
    if (Object.keys(errors).length !== 0) return setIsLoading(false)
    else {
      try {
        const response = await axios.post(Global.login, {email, password});
        saveDataFromLogin(response.data)
        setIsLoading(false);
        navigate('/home');
      } catch (error) {
        console.log(error)
        setIsLoading(false);
      }
    }
  }

  return (
    <>
      <FormControl isInvalid={hasError.email}>
        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input value={email} name='email' id='email' type='email' onChange={(e) => handleOnChange(e)}/>
        <FormErrorMessage>Error en formato del email</FormErrorMessage>
      </FormControl>
      <FormControl >
        <FormLabel mt='10px' htmlFor='password'>Contraseña</FormLabel>
        <Input  value={password}  name='password' id='password' type='password' onChange={(e) => handleOnChange(e)}/>
      </FormControl>
      <Stack
      mt='10px'
      alignItems={'center'} 
      >
        {isLoading ?
        <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        />
        :
        <>
          <Button onClick={signIn}>Iniciar sesión</Button>
          <Stack 
          direction='row'
          spacing='1'
          >
            <Text>No tenes cuenta? Registrate </Text>
            <Text 
            textDecoration='underline'
            cursor='pointer'
            onClick={changeFormMode}
            >
              acá
            </Text>
          </Stack>
        </>
        }
      </Stack>
    </>
  )
}