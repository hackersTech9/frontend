import { Stack, Menu, MenuItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


export const NavBar = () => {
  
  return (
    <nav>
      <Stack
      direction={{base: 'row', sm:'row'}}
      alignItems={'center'} 
      justifyContent={'space-between'}
      >
        <Menu>
          <Link to='/home'>
            <MenuItem>
                Música
            </MenuItem>
          </Link>
          <Link to='/home'>
            <MenuItem>
                Trailers
            </MenuItem>
          </Link>
          <Link to='/home'>
            <MenuItem>
                Eventos
            </MenuItem>
          </Link>
        </Menu>
      </Stack>
    </nav>
  )
}