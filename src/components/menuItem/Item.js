import { Link } from "react-router-dom";
import { useTheme, Typography } from "@mui/material";
import { MenuItem } from 'react-pro-sidebar';
import { colorTokens } from "../../theme";

export default function Item({title, to, icon, selected, setSelected}){
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    return (
        <Link to={to} style={{textDecoration: 'none'}}>
            <MenuItem 
                active={selected === title} 
                style={{color: colors.grey[100]}}
                onClick={() => setSelected(title)}
                icon={icon}
            >
                <Typography>
                    {title}
                </Typography>
            </MenuItem>
        </Link>
        
    )
}