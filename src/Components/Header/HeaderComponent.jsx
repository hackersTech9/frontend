import React, { useContext, useEffect } from 'react';
import { LoginContext } from 'Context/LoginContext';
import { useNavigate } from 'react-router-dom';
import { 
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  Stack,
  Avatar,
  Button
} from '@chakra-ui/react';

import { NavBar } from './NavBarComponent';

export const Header = () => {
  const navigate = useNavigate();
  const Login = useContext(LoginContext);
  const { userInfo, saveDataFromLogin, logout } = Login;

  useEffect(() => {
    const userInMemory = JSON.parse(localStorage.getItem('userInfo'));
    if(userInMemory) saveDataFromLogin(userInMemory)
    else navigate('/');
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleLogout = () => {
    logout();
    navigate('/')
  }

  return(
    <header>
      <Stack
      direction={{base: 'row', sm:'row'}}
      alignItems={'center'} 
      justifyContent={'space-between'}
      p={'5px 10px'}
      >
        <Popover>
          <PopoverTrigger>
            <Avatar
            name={`${userInfo?.firstname} ${userInfo?.lastname}`}
            src={userInfo?.avatar}
            />
          </PopoverTrigger>
          <PopoverContent
          w='150px'
          >
            <PopoverArrow />
            <PopoverHeader>{`${userInfo?.lastname.toUpperCase()} ${userInfo?.firstname}`}</PopoverHeader>
            <PopoverBody>
              <Button onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <NavBar/>
      </Stack>
    </header>
)};