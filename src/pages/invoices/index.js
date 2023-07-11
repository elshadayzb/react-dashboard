
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { colorTokens } from "../../theme";
import { mockDataInvoices } from "../../data/sampleData";
import Header from "../../components/Header";

export default function Invoices(){
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    const columns = [
        {field: "id", headerName: "id", flex: 0.5},
        {
            field: "name",
            headerName: "Full Name",
            flex: 1,
            cellClassName: "name-column--cell"
        },
        {
            field: "cost", 
            headerName: "Cost", 
            flex: 1, 
            renderCell: (params) => {
                return(
                    <Typography color={colors.greenAccent[500]}>
                        {params.row.cost} Birr
                    </Typography>
                )
            }
        },
        {field: "email", headerName: "Email Address", flex: 2},
        {field: "phone", headerName: "Phone Number", flex: 1},
        {field: "date", headerName: "Date", flex: 1}
        
    ]

    return(
        <Box sx={{ m: "20px" }}>
            <Header title="INVOICES" subtitle="List of Invoice Balance" />
            <Box
                sx={{
                    m: "30px 0 0 0",
                    height: "75vh",
                    "& .MuiDataGrid-root": {
                        border: "none"
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none"
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700]
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`
                    }
                }}
            >
                <DataGrid
                    rows={mockDataInvoices}
                    columns={columns}
                    checkboxSelection 
                />

            </Box>
        </Box>
    )
}