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
        {
            field: "name", 
            headerName: "Full Name", 
            flex: 1, 
            cellClassName: "name-column--cell"
        },
        {
            field: "age", 
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left"
        },
        {field: "phone", headerName: "Phone Number", flex: 1},
        {field: "email", headerName: "Email Address", flex: 1},
        {
            field: "access", 
            headerName: "Access Level",
            flex: 1,
            renderCell: ({ row: {access}}) => {
                return(
                    <Box 
                        sx={{
                            width: "60%", 
                            m: "0 auto", 
                            p: "5px",
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor: access === 'admin' ?
                                                colors.greenAccent[600] :
                                                colors.greenAccent[700],
                            borderRadius: "4px"
                            
                        }}
                    >
                        {access === "admin" && <AdminPanelSettingsOutlined />}
                        {access === "manager" && <SecurityOutlined /> }
                        {access === "user" && <LockOpenOutlined /> }
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {access[0].toUpperCase()}{access.slice(1)}
                        </Typography>
                        
                    </Box>
                )
            }
        }
    ]
    return(
        <Box sx={{ m: "20px" }}>
            <Header title="TEAM" subtitle="Managing Team Members" />
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
                    }
                }} 
            >
                {/* <DataGrid 
                    rows={mockDataTeam}
                    columns={columns}
                /> */}
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                    /* initialState={{
                        pagination: {
                            paginationModel: {
                            pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection */
                    //disableRowSelectionOnClick
                />
            </Box>
        </Box>
    )
}