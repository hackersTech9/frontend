import { Stack, Image, Text } from '@chakra-ui/react'
import { useNavigate } from '../../../node_modules/react-router-dom/index'




export const Stripe = ({sectionTitle, billboard }) => {

  const navigate = useNavigate();

  const handleOnClick = (contentSrc, contentTitle) => {
    navigate('/play', { state: {contentSrc, contentTitle  }});
    
  }
  
  const generateTitle = (key) => {
    switch (key) {
      case "live":
        return(
          <Stack direction="row">
        <Text>contenido en</Text>
          <Text>VIVO</Text>
          </Stack>
        )
      case "movies":
        return(
          <Stack direction="row">
        <Text>películas</Text>
          <Text>ON DEMAND</Text>
          </Stack>
        )  
      case "series":
        return(
          <Stack direction="row">
        <Text>series</Text>
          <Text>ON DEMAND</Text>
          </Stack>
        )
      case "music":
        return(
        <Text>música</Text>
        )
        case "mobileContent":
        return(
          <Stack direction="row">
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



  return(
    <>
    <div p={6}>{generateTitle(sectionTitle)}</div>
    <Stack  direction= "row" p={10}>
      {billboard.map((v, i) => {
        
        return(
          <div  key={i} >
          <Text >
          {v.name}
          </Text>
          <div onClick={() => {
            handleOnClick(v.url, v.name)
          }}>
          <Image 
              boxSize='100%'  
              objectFit='cover'
          src={v.thumbnail ? v.thumbnail : "" }
          alt={v.name}
          />
          </div>
          </div>
        )
      })
    }

    </Stack>
    </>
  )
} 


