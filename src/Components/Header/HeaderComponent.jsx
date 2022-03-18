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
  Image
} from '@chakra-ui/react';
import img from 'Assets/flow.jpg'

export const Header = () => {
  const navigate = useNavigate();
  const Login = useContext(LoginContext);
  const { userInfo, saveDataFromLogin, logout } = Login;
  const Theme = useContext(ThemeContext);
  const { changeTheme } = Theme;

  useEffect(() => {
    const userInMemory = JSON.parse(localStorage.getItem('userInfo'));
    if(userInMemory) saveDataFromLogin(userInMemory)
    else navigate('/');
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
            <PopoverHeader textAlign={['center']} m={'3'} borderColor='tecoGrey900'>{`${userInfo?.lastname.toUpperCase()} ${userInfo?.firstname}`}</PopoverHeader>
            <PopoverBody>
              <Stack m={'1'}>
                  <Button
                  onClick={changeTheme}
                  >
                    Luna / Sol
                  </Button>
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