import { extendTheme } from "@chakra-ui/react";

const colorPalette = {
  tecoGreen: '#21D2A3',
  tecoBlue: '#3C04A4',
  tecoLightBlue: '#00AEE6',
  tecoGrey: '#C9D2E2',
  tecoBlack: 'black',
  tecoGrey900: '#171923',
  tecoGrey300: '#CBD5E0'
}

export default extendTheme({
  styles: {
    global: {
      body: {
        bg: colorPalette.tecoBlack,
        color: colorPalette.tecoGreen
      }
    }
  },
  colors: colorPalette,
  components: {
    Button: {
      variants: {
        btnMain: {
          color: colorPalette.tecoBlack,
          bg: colorPalette.tecoGreen,
          cursor: 'pointer'
        },
        fondo: {
          bg: 'tecoGrey900'
        }
      }
    }
  }
});