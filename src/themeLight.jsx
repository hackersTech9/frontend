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
        bg: "#DBE4F4",
        color: colorPalette.tecoBlack
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
          color: colorPalette.tecoGreen,
          bg: colorPalette.tecoGrey900,
          point: 'pointer'
        },
        fondo: {
          bg: '#CBD5E0'
        }
      }
    },
    Input: {
      variants: {
        logImput: {
          bg: colorPalette.tecoGrey300
        },
      }
    },
    Text:{
      variants: {
        stripeTextPrimary: {
          color: colorPalette.tecoGrey900,
          fontSize: '37px',
          fontWeight:'bold'
        },
        stripeTextSecondary: {
          color: colorPalette.tecoGreen,
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