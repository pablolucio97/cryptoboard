import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
    colors:{
        "yellow" : "#FFDC5F",
        "black" : "#000000",
        "gray" : "#696969",
        "white" : "#FFFFFF",
        "bg-white" : "#F6F4F4",
        "red" : "#FF7171",
        "green" : "#71ff71",
    },
    fonts:{
        heading: "Poppins",
        body: "Poppins"
    },
    global:{
        body:{
            bg: "bg-white"
        }
    }
})