import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from 'Context/LoginContext';
import {
  Center,
  Container,
  Stack
} from '@chakra-ui/react';

import prefTest from 'prefTest.json';
import { Stripe } from 'Components/Stripe/';

export const Home = () => {

  const Login = useContext(LoginContext);
  const { userInfo } = Login;

  const [dataToRender, setDataToRender] = useState(null);

  useEffect(() => {
    console.log(prefTest)
    setDataToRender(prefTest)
  },[]);


  return(
    <Container>
      <Center>
        <h2>Bienvenid@ {userInfo?.firstname}!!</h2>
      </Center>
      <Stack
      align='center'
      >
        {dataToRender ?
          <Stripe />
          :
          <p>cargando..</p>
        }
      </Stack>
    </Container>
)};