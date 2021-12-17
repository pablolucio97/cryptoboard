import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    yellow: "#FFDC5F",
    black: "#000000",
    gray: "#696969",
    white: "#FFFFFF",
    "bg-white": "#F6F4F4",
    red: "#FF7171",
    green: "#008000",
  },
  styles: {
    global: {
      "html, body": {
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
        fontFamily: "Poppins",
        overflowX: "hidden",
        backgroundColor: 'bg-white'
      },
      a: {
        textDecoration: "none",
        fontFamily: "Poppins",
        color: "gray",
        cursor: "pointer"
      },
      button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        border: 'none',
        outline: 'none'
      },
      input:{
        padding: ".4rem",
        height: '22px',
        borderRadius: "4px",
        border: '1px solid black',
        outline: 'none'
      }      
    },
  },
});
