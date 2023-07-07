import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
import { colorTokens } from "../../theme";
import { mockDataTeam } from "../../data/sampleData";
import Header from "../../components/Header";

export default function Team(){
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    const columns = [
        {field: "id", headerName: "Id"},
        {field: "name", headerName: "Full Name"},
        {field: "email", headerName: "Email Address"},
        {field: "age", headerName: "Age"},
        {field: "phone", headerName: "Phone Number"},
        {field: "access", headerName: "Access"}
    ]
    return(
        <Box>
            <Header title="TEAM" subtitle="Managing Team Members" />
            <Box>
                <DataGrid 
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}