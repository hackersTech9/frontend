import React, { useState, useContext } from 'react';
import { LoginContext } from 'Context/LoginContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Global from 'Global';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Stack,
  Button,
  Text,
  Divider,
  Image,
  Spinner
} from '@chakra-ui/react';

export default function SignUp({ checkInputs, changeFormMode, handleOnChange, dataToSend, hasError, resetInputs }) {

  const Login = useContext(LoginContext);
  const { saveDataFromLogin } = Login;
  const navigate = useNavigate();
  const { name, lastName, email, password, password2, avatar } = dataToSend;
  const [registrationStep, setRegistrationStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const changeStep = () => {
    switch(registrationStep) {
      case 1:
        return setRegistrationStep(2);
      case 2:
        return setRegistrationStep(1);
      default: 
        return setRegistrationStep(1);
    }
  }

  const signUp = async () => {
    setIsLoading(true);
    const errors = checkInputs(dataToSend);
    if (Object.keys(errors).length !== 0 && (errors.name || errors.lastName)) setRegistrationStep(1)
    else {
      try {
        const dataForSignUp = {
          firstname: name,
          lastname: lastName,
          avatar,
          email,
          password
        };
        const response = await axios.post(Global.signup, dataForSignUp);
        saveDataFromLogin(response.data.data, response.data.token)
        setIsLoading(false);
        navigate('/home');
        changeFormMode();
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  }

  return (
    <>
      {registrationStep === 1 && 
      <>
        <Stack
        direction='row'
        justifyContent='center'
        h='100px'
        >
          <Image
          alt='defaultAvatar'
          src={avatar}
          w='100px'
          borderRadius='full'
          />
        </Stack>
        <FormControl isRequired isInvalid={hasError.name}>
          <FormLabel htmlFor='name'>Nombre</FormLabel>
          <Input value={name} name='name' id='name' type='text' onChange={(e) => handleOnChange(e)}/>
          {hasError.name && <FormErrorMessage>Error en nombre ingresado</FormErrorMessage>}
        </FormControl>
        <FormControl isRequired isInvalid={hasError.lastName}>
          <FormLabel htmlFor='lastName'>Apellido</FormLabel>
          <Input value={lastName}  name='lastName' id='lastName' type='text' onChange={(e) => handleOnChange(e)}/>
          {hasError.lastName && <FormErrorMessage>Error en apellido ingresado</FormErrorMessage>}
        </FormControl>
      </>
      }
      {registrationStep === 2 &&
      <>
        <FormControl isRequired isInvalid={hasError.email}>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <Input  value={email}  name='email' id='email' type='email' onChange={(e) => handleOnChange(e)}/>
          {hasError.email && <FormErrorMessage>Error en email ingresado, requerido "@" y ".com"</FormErrorMessage>}
        </FormControl>
        <Divider mt='10px'/>
        <FormControl isRequired isInvalid={hasError.password}>
          <FormLabel mt='10px' htmlFor='password'>Contraseña</FormLabel>
          <Input  value={password}  name='password' id='password' type='password' onChange={(e) => handleOnChange(e)}/>
          {hasError.password && <FormErrorMessage>Error en contraseña ingresada</FormErrorMessage>}
        </FormControl>
        <FormControl isRequired isInvalid={hasError.password2}>
          <FormLabel mt='10px' htmlFor='password2'>Confirmar Contraseña</FormLabel>
          <Input  value={password2}  name='password2' id='password2' type='password' onChange={(e) => handleOnChange(e)}/>
          {hasError.password && <FormErrorMessage>La contraseña no coincide</FormErrorMessage>}
        </FormControl>
      </>
      }
      <Stack
      mt='10px'
      alignItems={'center'} 
      >
        <Stack direction='row'>
          {registrationStep === 1 &&
          <>
          <Button variant='btnMain' onClick={changeStep}>Paso siguiente</Button>
          </>
          }
          {registrationStep === 2 &&
          <>
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
              <Button variant='btnMain' onClick={changeStep}>Paso anterior</Button>
              <Button variant='btnMain' onClick={signUp}>Registrar cuenta</Button>
            </>
            }
          </>
          }
        </Stack>
        <Stack 
        direction='row'
        spacing='1'
        >
          <Text>Ya tenes cuenta? Inicia sesión </Text>
          <Text 
          textDecoration='underline'
          cursor='pointer'
          onClick={changeFormMode}
          >
            acá
          </Text>
        </Stack>
      </Stack>
    </>
  )
}