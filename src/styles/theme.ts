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
    green: "#71ff71",
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
      },
    },
  },
});
