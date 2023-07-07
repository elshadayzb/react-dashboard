import { Box } from "@mui/material";
import Header from "../../components/Header";

export default function Dashboard(){
    return (
        <Box sx={{m: "20px"}}>
            <Box sx={{
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center" 
                }}
            >
                <Header title="DASHBOARD" subtitle="Welcome to Your Dashboard"/>
            </Box>
            
        </Box>  
    );
}