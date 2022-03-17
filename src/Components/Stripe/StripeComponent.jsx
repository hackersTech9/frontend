import { Stack, Image, Text } from '@chakra-ui/react'
import { useNavigate } from '../../../node_modules/react-router-dom/index'



export const Stripe = ({sectionTitle, billboard }) => {

  console.log(billboard)
  const navigate = useNavigate();

  const handleOnClick = (url) => {
    navigate('/play', { state: {contentSrc: url}});
  }
  
  return(
    <>
    <div p={6}>{sectionTitle}</div>
    <Stack  direction= "row" p={10}>
      {billboard.map((v, i) => {
        
        return(
          <div  key={i} >
          <Text >
          {v.name}
          </Text>
          <div onClick={() => {
            handleOnClick(v.url)
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


