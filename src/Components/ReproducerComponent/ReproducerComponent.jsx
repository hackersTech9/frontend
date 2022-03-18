import React, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom/";

import { Container, Stack, Button, Text, Image } from '@chakra-ui/react';

import { BsFillShareFill } from 'react-icons/bs'

export const Reproducer = () => {
  
  const navigate = useNavigate();
  const { state } = useLocation();
  const [content, setContent] = useState(null);

  useEffect(() => {
    if(!state?.contentSrc || !state?.contentTitle) return navigate('/notfound');

    const { contentSrc, contentTitle } = state;
    const contentToRender = {
      contentSrc: contentSrc.replace('watch?v=','embed/'),
      contentTitle
    }
    setContent(contentToRender);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleNav = () => {
    navigate("/home");
  }

  return(
    <Container mt='70px' maxW='container.xl'>
      <Stack
      spacing='8'
      >
        {content &&
        <>
          <Text>{content.contentTitle}</Text>
          <iframe
          width={'100%'}
          height={'400px'}
          src={content.contentSrc}
          allowFullScreen
          title='asd'
          />
        </> 
        }
        <Stack direction='row' spacing={4}>
          <Button width="100%" onClick={handleNav} variant='btnMain'>Volver</Button>
          <Button 
              variant='btnMain'
              leftIcon={
                <BsFillShareFill/>
              }
              >
          </Button>
        </Stack>
      </Stack>
    </Container>  
  )
};