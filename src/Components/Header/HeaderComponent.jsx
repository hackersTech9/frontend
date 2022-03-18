import React, { useContext, useEffect } from 'react';
import { LoginContext } from 'Context/LoginContext';
import { ThemeContext } from 'Context/ThemeContext';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  Stack,
  Avatar,
  Button,
  Image,
  Text
} from '@chakra-ui/react';
import { FaMoon, FaSun } from "react-icons/fa";

import img from 'Assets/flow.lite.png'

export const Header = () => {
  const navigate = useNavigate();
  const Login = useContext(LoginContext);
  const { userInfo, saveDataFromLogin, logout } = Login;
  const Theme = useContext(ThemeContext);
  const { changeTheme, defaultTheme } = Theme;

  useEffect(() => {
    const userInMemory = JSON.parse(localStorage.getItem('userInfo'));
    if(userInMemory) saveDataFromLogin(userInMemory)
    else {navigate('/')};
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleLogout = () => {
    logout();
    navigate('/');
  }
  const handleHome = () =>{
    navigate("/home")
  }

  return(
    <header>

      <Stack
      direction={{base: 'row', sm:'row'}}
      justifyContent={'space-between'}
      p={'10px 10px'}
      m={'0 auto'}
      w={'95%'}
      >
        <Image 
        onClick={handleHome}
        h='50px'
        src={img}
        alt='flow'
        />
        <Popover>
          <PopoverTrigger>
            <Avatar _hover={{cursor:'pointer'}}
            name={`${userInfo?.firstname} ${userInfo?.lastname}`}
            src={userInfo?.avatar}
            />
          </PopoverTrigger>
          <PopoverContent bg='tecoGrey900' border='none' boxShadow='0px 0px 10px rgba(0,0,0,0.5)'
          w='250px' h='200px'
          >
            <PopoverArrow bg='tecoGreen'/>
            <PopoverHeader textAlign={['center']} m={'3'} borderColor='tecoGrey900'>
              <Stack direction='row' align='center' justifyContent='space-between'>
                <Text>
                  {`${userInfo?.lastname.toUpperCase()} ${userInfo?.firstname}`}
                </Text>
                <Button
                w='10px'
                p='0'
                borderRadius='100%'
                onClick={changeTheme}
                variant='btnMain'
                >
                  { defaultTheme ? <FaMoon /> : <FaSun />}
                </Button>
              </Stack>
            </PopoverHeader>
            <PopoverBody>
              <Stack m={'1'}>
                  <Button bg='tecoGreen' mb={'2'} color='tecoGrey900'>
                    <Link to='/edituser'>
                        Editar usuario
                    </Link>
                  </Button>
                <Button bg='tecoGreen' color='tecoGrey900'
                onClick={handleLogout}
                >
                  Cerrar sesión
                </Button>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        {/* <NavBar/> */}
      </Stack>
    </header>
)};