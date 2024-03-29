import { position } from "@chakra-ui/react"
import { MdOpacity } from "react-icons/md"

const colors = {
    deleted: "#eee"
}

export const buttonStyles = {
    buttonAddStyle: {
        colorScheme:"green",
        size:"xs",
        width:"60px",
        variant:"outline",
        marginLeft:"40%",
    },

    deleteButton: {
        backgroundColor:"#E53E3E",
        borderRadius:"10",
        bottom:"0%",
        paddingTop:"35px",
        paddingRight:"15px",
        width:"24%",
        height:"100%",
        paddingBottom:"5%",
        color: colors.deleted,
    },

    hideDelete:{
        left:"110%",
    },

    moveTaskCardToLeft: {
        transition: "transform 0.3s",
        transform: "translateX(-23%)",
        // opacity: "100%",
    },

    showAll: {
        bg:"none",
        marginTop:"0 !important",
        _hover:{ bg: "none" },
        _active:{bg: "none" },
        color:"#2B6CB0",
        fontWeight:"600",
    }
}

export const deleteInvisibleButton= {
    ...buttonStyles.deleteButton,
    left:"76%",
    opacity:"0%"
}

export const deleteVisibleButton = {
    ...buttonStyles.deleteButton,
    left:"100%"
}

export const hideDelete = {
    left:"110%",
}



