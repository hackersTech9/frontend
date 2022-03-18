import React, { useEffect, useState } from "react";
import { SocialMedia } from "Components/SocialMedia/index";
import { useLocation, useNavigate } from "react-router-dom/";

import { Container, Stack, Button, Text } from '@chakra-ui/react';

import { BsFillShareFill } from 'react-icons/bs'



export const Reproducer = () => {
  
  const navigate = useNavigate();
  const { state } = useLocation();
  const [content, setContent] = useState(null);
  const [isOpen, setIsOpen] = useState(false)
  // const [onClose, setOnClose] = useState(false)
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

  const encenderModal = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  const cerrarModal = () => {
    setIsOpen(false)
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
              onClick={
                encenderModal
              }
              variant='btnMain'
              borderRadius="2000px"
              width="48px"
              >
                <BsFillShareFill/>
          </Button>
        </Stack>
      </Stack>

      <SocialMedia
        isOpen={isOpen}
        onClose={cerrarModal}
      >
        
      </SocialMedia>
      {/* <Modal isOpen={isOpen} onClose={cerrarModal} isCentered>
        <ModalOverlay />
        <ModalContent 
          border="20px"
        >
          <ModalBody>
            <HStack>
              <Button 
                colorScheme='facebook' 
                leftIcon={<FaFacebook />}
                size="lg"
                onClick={ enviarAlerta}
                >
                Facebook
              </Button>
              <br></br>
              <Button 
                colorScheme='twitter' 
                leftIcon={<FaTwitter />}
                size="lg"
                onClick={ enviarAlerta}
                >
                Twitter
              </Button>
                  <br></br>
              <Button 
                colorScheme='whatsapp' 
                leftIcon={<FaWhatsapp />}
                size="lg"
                onClick={ enviarAlerta}
                >
              whatsapp
              </Button>
                  <br></br>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal> */}
    </Container>  
  )
};