import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from 'Context/LoginContext';
import {
  Center,
  Container,
  Stack
} from '@chakra-ui/react';

import { Stripe } from 'Components/Stripe/';

export const Home = () => {

  const Login = useContext(LoginContext);
  const { userInfo } = Login;

  const [dataToRender, setDataToRender] = useState(null);

  useEffect(() => {
    const { preference } = userInfo;
    const processedData = processData(preference);
    setDataToRender(processedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  const processData = (prefTest) => {
    const processedData = Object.keys(prefTest).map((key) => {return({sectionTitle: key, billboard: prefTest[key]})});
    return processedData;
  }

  return(
    <Container
    maxW='container.xxl'
    >
      <Center>
        <h2>Qué vas a ver {userInfo?.firstname}?</h2>
      </Center>
      <Stack
      >
        {dataToRender ?
          dataToRender.map((v, i) => <Stripe key={i} sectionTitle={v.sectionTitle} billboard={v.billboard}/>)
          :
          <p>cargando..</p>
        }
      </Stack>
    </Container>
)};