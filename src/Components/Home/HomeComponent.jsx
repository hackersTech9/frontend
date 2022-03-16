import React, { useContext } from 'react';
import { LoginContext } from 'Context/LoginContext';
import {
  Center,
  Container
} from '@chakra-ui/react';

export const Home = () => {

  const Login = useContext(LoginContext);
  const { userInfo } = Login;

  return(
    <Container>
      <Center>
        <h2>Bienvenid@ {userInfo?.firstname}!!</h2>
      </Center>
    </Container>
)};