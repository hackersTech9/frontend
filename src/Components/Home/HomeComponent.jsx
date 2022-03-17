import React, { useContext, useEffect, useState, useLayoutEffect } from 'react';
import { LoginContext } from 'Context/LoginContext';
import {
  Center,
  Container,
  Stack
} from '@chakra-ui/react';

import { Stripe } from 'Components/Stripe/';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  },[]);
  return size;
}

export const Home = () => {

  const Login = useContext(LoginContext);
  const { userInfo } = Login;
  const [width] = useWindowSize();
  const [dataToRender, setDataToRender] = useState(null);

  useEffect(() => {
    if(userInfo) {
      const { preference } = userInfo;
      let processedData = processData(preference);
      if (width < 425) {
        let mobileData = [];
        processedData.forEach((preference)=> {
          const { sectionTitle, billboard} = preference;
          if(sectionTitle === 'live' || sectionTitle === 'music'){
            mobileData = [...mobileData, preference]
          } else {
            const index = mobileData.findIndex(x => x.sectionTitle === "mobileContent");
            if(index === -1) mobileData = [...mobileData, {sectionTitle: 'mobileContent', billboard}]
            else mobileData[index].billboard = [...mobileData[index].billboard, ...billboard];
          };
        });
        setDataToRender(mobileData);
      } else {
        setDataToRender(processedData);
      }
    }
  },[width, userInfo]);
  
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