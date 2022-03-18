import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Global from 'Global';
import { HELPER_FUNCTIONS } from 'Helper/helper';
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Spinner,
  Container
} from '@chakra-ui/react';

export const EditUser = () => {

  const [dataToSend, setDataToSend] = useState({passwordCurrent: '', passwordNew: ''});
  const [isLoading, setIsLoading] = useState(false);

  
  const navigate = useNavigate();

  const { passwordCurrent, passwordNew } = dataToSend;

  const handleOnChange = (e) => {
    setDataToSend({
      ...dataToSend,
      [e.target.name]: e.target.value
    });
  }

  const handleOnSubmit = async () => {
    const bearer = HELPER_FUNCTIONS.getToken();
    const config = { headers: { Authorization: bearer }}
    setIsLoading(true);
    try {
      await axios.put(Global.changePassword, dataToSend, config);
      setIsLoading(false);
      navigate('/home');
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return(
    <Container
    mt='15px'
    >
      <Stack>
        <FormControl isRequired>
          <FormLabel htmlFor='passwordCurrent'>Contraseña actual</FormLabel>
          <Input variant="logImput" value={passwordCurrent}  name='passwordCurrent' id='passwordCurrent' type='password' onChange={(e) => handleOnChange(e)}/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='passwordNew'>Contraseña nueva</FormLabel>
          <Input variant="logImput" value={passwordNew}  name='passwordNew' id='passwordNew' type='password' onChange={(e) => handleOnChange(e)}/>
        </FormControl>
        {isLoading ?
          <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
          />
        :
        <Stack
        alignItems={'center'}
        justifyContent='space-around'
        direction='row'
        >
          <Button variant="btnMain">
            <Link to='/home'>
              Volver
            </Link>
          </Button>
          <Button variant="btnMain" onClick={handleOnSubmit}>Aplicar</Button>
        </Stack>
        }
      </Stack>
    </Container>
)};