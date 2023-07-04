import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import { colorTokens } from '../../theme';
import { HomeOutlined, PeopleOutlined, ContactsOutlined, ReceiptOutlined,
         PersonOutlined, CalendarTodayOutlined, HelpOutlined, BarChartOutlined, PieChartOutlined,
         TimelineOutlined, MenuOutlined, MapOutlined
 } from '@mui/icons-material';
import userPhoto from '../../assets/student 2.jpg';
import Item from '../../components/menuItem/Item';

/* function Item({title, to, icon, selected, setSelected}){
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    return (
        <MenuItem 
            active={selected === title} 
            style={{color: colors.grey[100]}}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to}/>
        </MenuItem>
    )
} */

const routes = [
    {
        title: "Dashboard",
        to: "/",
        icon: <HomeOutlined />
    },
    {
        title: "Team",
        to: "/team",
        icon: <PeopleOutlined />
    },
    {
        title: "Contacts",
        to: "/contacts",
        icon: <ContactsOutlined />
    },
    {
        title: "Invoices",
        to: "/invoices",
        icon: <ReceiptOutlined />
    },
    {
        title: "FAQs",
        to: "/faq",
        icon: <HelpOutlined />
    },
    {
        title: "Calendar",
        to: "/calendar",
        icon: <CalendarTodayOutlined />
    },
    {
        title: "Bar",
        to: "/bar",
        icon: <BarChartOutlined />
    },
    {
        title: "Line",
        to: "/line",
        icon: <TimelineOutlined />
    }, 
    {
        title: "Pie",
        to: "/pie",
        icon: <PieChartOutlined />
    },                
    {
        title: "Geography",
        to: "/geography",
        icon: <MapOutlined />
    },                  
                    
]

export default function SidebarMenu(){
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');


    return(
        <Box
            sx={{  
                "& .ps-sidebar-root":{
                    borderColor: "transparent !important"
                },            
                "& .ps-sidebar-container": {
                    background: `${colors.primary[400]} !important`
                },
                "& .ps-menu-icon":{
                    backgroundColor: 'transparent !important'
                },
                "& .ps-menu-button": {
                    padding: "5px 35x 5px 20px !important"
                },
                "& .ps-menu-button:hover": {
                    color: "#868dfb !important"
                },
                "& .ps-menuitem-root.active": {
                    color: "#6870fa !important"
                }
            }}
        >

            <Sidebar style={{height: "100%"}}>
                <Menu>
                    <MenuItem 
                        icon={isCollapsed ? <MenuOutlined/> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}           
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        { !isCollapsed && (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    ml: "15px",
                                }}
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMINS
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlined />
                                </IconButton>
                            </Box>

                        )
                        }
                    </MenuItem>
                    { !isCollapsed && (
                        <Box sx={{mb: "25px", textAlign: "center"}}
                        >
                            <Box 
                            >
                                <img 
                                    alt="User Profile"
                                    src={userPhoto}
                                    style={{
                                        height: "100px",
                                        width: "100px",
                                        cursor: "pointer",
                                        borderRadius: "50%"
                                    }}
                                />
                            </Box>
                            <Box>  
                                <Typography variant="h3" color={colors.grey[100]} fontWeight="bold"
                                    sx={{m: "10px 0 0 0"}}
                                >
                                    User Name
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    Partner Admin
                                </Typography>
                            </Box>    
                        </Box>
                    )}
                    {/* Menu Items */}
                    <Box sx={{pl: isCollapsed ? undefined : "10%"}}>
                        {routes.map((route, index) => {
                            return(
                                <Item 
                                    title={route.title}
                                    to={route.to}
                                    icon={route.icon}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            )
                        })}
                       
                    </Box>

                    {/* <MenuItem icon={<HomeOutlined />}>Dashboard</MenuItem>
                    <MenuItem icon={<PeopleOutlined />}>Team</MenuItem>
                    <MenuItem icon={<ContactsOutlined />}>Contacts</MenuItem>
                    <MenuItem icon={<ReceiptOutlined />}>Invoices</MenuItem>
                    <MenuItem icon={<HelpOutlined/>}>FAQ</MenuItem>
                    <MenuItem icon={<CalendarTodayOutlined/>}>Calendar</MenuItem>
                    <MenuItem icon={<BarChartOutlined />}>Bar</MenuItem>
                    <MenuItem icon={<TimelineOutlined />}>Line</MenuItem>
                    <MenuItem icon={<PieChartOutlined />}>Pie</MenuItem>
                    <MenuItem icon={<MapOutlined />}>Geography</MenuItem> */}
                    
                </Menu>
            </Sidebar>
        </Box>

        
    );
}