import React, { useEffect } from "react";

import { Button, Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  HStack
 } from '@chakra-ui/react';

import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'



export const SocialMedia = (props) => {
  
  // const [onClose, setOnClose] = useState(false)
  useEffect(() => {

  },[])

  const enviarAlerta = (e) => {
    e.preventDefault()
    alert("Enviando contenido a tus amigos")
  }
  console.log(props)
  return(

    <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
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
  </Modal>
  )
};