import { extendTheme } from "@chakra-ui/react";

import '@fontsource/roboto/700.css';
import '@fontsource/open-sans/700.css';

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
  fonts: {
    heading: 'Open Sans, sans-serif',
    body: 'Roboto, sans-serif',
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
    },
    Text:{
      variants: {
        stripeTextPrimary: {
          color: colorPalette.tecoGreen,
          fontSize: '37px',
          fontWeight:'bold'
        },
        stripeTextSecondary: {
          color: colorPalette.tecoLightBlue,
          fontSize: '20px',
          fontWeight:'bold'
        },
        stripeTextTerciary: {
          color: colorPalette.tecoBlack,
          fontSize: '14px',
          fontWeight:'bold',
          bg:'tecoGreen'
        }
      }
    }
  }
});