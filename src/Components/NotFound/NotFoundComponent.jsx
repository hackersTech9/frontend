import { Link } from 'react-router-dom';
import {
  Text,
  Heading,
  Button,
  Container,
  Image
} from '@chakra-ui/react';

import img from 'Assets/404.png'

export const NotFound = () => {

  return(
      <Container
      mt='20px'
      centerContent
      >
        <Heading>ERROR 404</Heading>
        <Image
        src={img}
        alt='404'
        />
        <Text>
          Ups! Parece que estás perdid@
        </Text>
        <Link to='/home'>
          <Button mt='15px'>Ir al inicio</Button>
        </Link>
      </Container>
)};