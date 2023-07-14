import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useMediaQuery} from "@mui/material";
import Header from "../../components/Header";

export default function Form(){
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        address1: "",
        address2: ""
    };
    const phoneRegex = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

    const userSchema = yup.object({
        firstName: yup.string().required("First Name is a required field."),
        lastName: yup.string().required("Last Name is a required field."),
        email: yup.string().email("Use the proper format for email").required("Email is a required field"),
        contact: yup
                .string()
                .matches(phoneRegex, "Phone must be in the format +251911121314")
                .required("Contact is a required field."),
        address1: yup.string().required("Address is a required field."),
        address2: yup.string()
    })

    function handleFormSubmit(values){
      console.log("Values: ", values);  
    }

    return(
        <Box sx={{m: "20px"}}>
            <Header title="CREATE USER" subtitle="Create a New User Profile"/>
            <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                validationSchema={userSchema}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                    <form onSubmit={handleSubmit} style={{width: "80%", margin: "auto"}}>
                        <Box sx={{
                                display: "grid", 
                                gap: "30px",
                                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                                "& > div": {
                                    gridColumn: isNonMobile ? undefined : "span 4"
                                }
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 2"}}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2"}}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 4"}}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Phone Number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name="contact"
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{ gridColumn: "span 4"}}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address 1"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address1}
                                name="address1"
                                error={!!touched.address1 && !!errors.address1}
                                helperText={touched.address1 && errors.address1}
                                sx={{ gridColumn: "span 4"}}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address 2"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address2}
                                name="address2"
                                error={!!touched.address2 && !!errors.address2}
                                helperText={touched.address2 && errors.address2}
                                sx={{ gridColumn: "span 4"}}
                            />
                        </Box>
                        <Box sx={{ 
                                display: "flex",
                                justifyContent: "end",
                                mt: "20px",

                            }}
                        >
                            <Button type="submit" color="secondary" variant="contained">
                                Create New User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}