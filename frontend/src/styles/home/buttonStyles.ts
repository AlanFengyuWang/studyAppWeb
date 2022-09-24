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
        bottom:"5%",
        paddingTop:"35px",
        paddingRight:"15px",
        width:"24%",
        height:"95%",
        paddingBottom:"5%",
        color: colors.deleted,
    },

    hideDelete:{
        left:"110%",
    },

    moveTaskCardToLeft: {
        transition: "transform 0.3s",
        transform: "translateX(-23%)",
        opacity: "100%",
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



