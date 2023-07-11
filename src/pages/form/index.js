import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useMediaQuery} from "@mui/material";

export default function Form(){
    const isNonMobile = useMediaQuery("(min-width: 600px)");


    function handleFormSubmit(values){
      console.log("Values: ", values);  
    }

    return(
        <Box sx={{m: "20px"}}>
            <Header title="CREATE USER" subtitle="Create a New User Profile"/>
            Form
        </Box>
    )
}