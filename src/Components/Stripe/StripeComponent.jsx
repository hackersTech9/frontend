import React, { useState } from 'react';
import {
  Stack,
  Text,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
 } from '@chakra-ui/react'

import { useNavigate } from '../../../node_modules/react-router-dom/index'
import { FaPlus, FaPlay } from "react-icons/fa";
import { EditContent } from 'Components/EditContent';

export const Stripe = ({ sectionTitle, billboard }) => {

  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [contentToEdit, setContentToEdit] = useState(null);
  const handleOnClick = (contentSrc, contentTitle) => {
    navigate('/play', { state: {contentSrc, contentTitle}});
  }
  
  const generateTitle = (key) => {
    switch (key) {
      case "live":
        return(
          <Stack justifyContent='center' direction="row" align='baseline'>
            <Text variant='stripeTextPrimary'>TV</Text>
            <Text variant='stripeTextSecondary'>en VIVO</Text>
          </Stack>
        )
      case "movies":
        return(
          <Stack justifyContent='center' direction="row" align='baseline'>
            <Text variant='stripeTextPrimary'>Películas</Text>
            <Text variant='stripeTextSecondary'>ON DEMAND</Text>
          </Stack>
        )  
      case "series":
        return(
          <Stack justifyContent='center' direction="row" align='baseline'>
            <Text variant='stripeTextPrimary'>Series</Text>
            <Text variant='stripeTextSecondary'>ON DEMAND</Text>
          </Stack>
        )
      case "music":
        return(
          <Stack justifyContent='center' direction="row" align='baseline'>
        <Text variant='stripeTextPrimary'>Música</Text>
        </Stack>
        )
        case "mobileContent":
        return(
          <Stack justifyContent='center' direction="row" align='baseline'>
            <Text>contenido</Text>
            <Text>ON DEMAND</Text>
          </Stack>
        )
      default:
        return(
          "Algo salió mal"
        )
    }
  }

  const handleOpenModal = (v) => {
    setContentToEdit(v)
    onOpen();
  }

  return(
    <>
      {generateTitle(sectionTitle)}
      <Stack align='center' direction= {{base:"column", md:"row"}}>
        {billboard.map((v, i) => {  
          return(
            
            <Box key={i}
            // w='auto'
            //h='auto'
            m={'0 auto'}
            >
              <Stack
              justifyContent='end'
              w={[200, 200]}
              h={[300, 300]}
              m={2}
              transition='all 0.3s ease-in-out'
              cursor='pointer'
              _hover={{transform: 'scale(1.05)', transition: 'all 0.2s ease-in-out'}}
              bgGradient={`url(${v.thumbnail})`}
              backgroundRepeat='no-repeat'
              backgroundPosition='center'
              backgroundSize='contain'
              >
                <Stack direction='row'>
                  <Button
                  variant='btnMain'
                  onClick={() => handleOpenModal(v)}
                  >
                    <FaPlus />
                  </Button>

                  <Button
                  variant='btnMain'
                  onClick={() => { handleOnClick(v.url, v.name) }}
                  >
                    <FaPlay />
                  </Button>
                </Stack>
                <Text
                variant='stripeTextTerciary'
                pl='5px'
                >
                  {v.name}
                </Text>
              </Stack>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                bg='tecoBlack'
                border='2px'
                >
                  <ModalHeader>Modificar contenido</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <EditContent closeModal={onClose} contentToEdit={contentToEdit} sectionTitle={sectionTitle} />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box> 
            
          )
        })
        }
      </Stack>
    </>
  )
} 


