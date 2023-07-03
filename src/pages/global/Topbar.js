import { useContext } from 'react';
import {Box, IconButton, useTheme, InputBase} from '@mui/material';
import { ColorModeContext,colorTokens } from '../../theme';
import { LightModeOutlined, DarkModeOutlined, NotificationsOutlined, SettingsOutlined, PersonOutlined, SearchIcon } from '@mui/icons-material';

export default function Topbar(){
    const theme = useTheme();
    const colors= colorTokens(theme.palette.mode);

    const colorContext = useContext(ColorModeContext);
    
    return(
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
            p={2}
        >
           { /* Search Bar */}
            <Box 
                sx={{
                    display: 'flex',
                    backgroundColor: colors.primary[400],
                    borderRadius: '3px'
                }}
            >
                <InputBase sx={{ml: 2, flex: 1}} placeholder='Search'/>
                <IconButton type='button' sx={{p: 1}}>
                    <SearchIcon />
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <IconButton onClick={colorContext.toggleColorMode}>
                    {
                        theme.palette.mode === 'dark' ?
                            (<LightModeOutlined/> ):
                            (<DarkModeOutlined/>)
                    }
                </IconButton>
                <IconButton>
                    <NotificationsOutlined />
                </IconButton>
                <IconButton>
                    <SettingsOutlined />
                </IconButton>
                <IconButton>
                    <PersonOutlined />
                </IconButton>                
            </Box>
        </Box>
    );
}