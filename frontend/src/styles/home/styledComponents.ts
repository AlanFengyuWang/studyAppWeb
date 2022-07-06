import { position } from "@chakra-ui/react"
import { MdOpacity } from "react-icons/md"

const colors = {
    deleted: "#eee"
}

export const buttonAddStyle = {
    colorScheme:"green",
    size:"xs",
    width:"60px",
    variant:"outline",
    marginLeft:"40%",
}

export const deleteActionStyle = {
    backgroundColor:"#E53E3E",
    borderRadius:"10",
    // height:"110px",
    marginBottom:"8px",
    paddingRight:"15px",
    paddingTop:"35px",
    color: colors.deleted,
}

export const hideDelete = {
    ...deleteActionStyle,
    width:"24%",
    left:"100%",
    height:"93%",
    opacity:"100%",
    paddingBottom:"5%",
}

