import { Stack, Text, Box } from '@chakra-ui/react'
import { useNavigate } from '../../../node_modules/react-router-dom/index'




export const Stripe = ({sectionTitle, billboard }) => {

  const navigate = useNavigate();

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

  return(
    <>
      {generateTitle(sectionTitle)}
      <Stack justifyContent='space-evenly'  direction= {{base:"column", sm:"row"}}>
        {billboard.map((v, i) => {  
          return(
            <Box key={i}
            w='auto'
            h='auto'
            >
              <Stack
              justifyContent='end'
              w={[100, 200]}
              h={[200, 300]}
              m={2}
              onClick={() => { handleOnClick(v.url, v.name) }}
              bgGradient={`url(${v.thumbnail})`}
              backgroundRepeat='no-repeat'
              backgroundPosition='center'
              backgroundSize='contain'
              >
                <Text
                variant='stripeTextTerciary'
                pl='5px'
                >
                  {v.name}
                </Text>
              </Stack>
            </Box>
          )
        })
        }
      </Stack>
    </>
  )
} 


