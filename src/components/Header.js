import { Typography, Box, useTheme } from '@mui/material';
import { colorTokens } from '../theme';

export default function Header({title, subtitle}){
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return(
        <Box sx={{mb: "30px"}}>
            <Typography 
                variant="h2" 
                color={colors.grey[100]} 
                fontWeight="bold"
                sx={{ mb: "5px"}}
            >
                {title}
            </Typography>
            <Typography 
                variant="h5" 
                color={colors.greenAccent[400]}
            >
                {subtitle}
            </Typography>
        </Box>
    )
}