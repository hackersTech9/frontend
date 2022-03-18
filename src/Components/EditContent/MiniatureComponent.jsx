import {
  Stack,
  Text,
  Button,
 } from '@chakra-ui/react'

export const MiniatureComponent = ({ contentData, editUserPreference }) => {
  return(
    <Stack direction='row' justifyContent='space-between'>
      <Button
      onClick={() => editUserPreference(contentData)}
      variant='btnMain'
      >Seleccionar</Button>
      <Text>{contentData.name}</Text>
    </Stack>
  )
}