import { Box, useTheme, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Header from "../../components/Header";
import { colorTokens } from "../../theme";

export default function FAQ(){
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return(
        <Box sx={{m: "20px"}}>
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            <Accordion defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMore />} >
                    <Typography color={colors.greenAccent[500]} variant="h3">
                        An important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi labore aliquid quaerat repudiandae quos rem? 
                        Adipisci odio quo aperiam alias dolorum quisquam, ipsam velit vitae necessitatibus impedit molestiae nemo facilis!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMore />} >
                    <Typography color={colors.greenAccent[500]} variant="h3">
                        Another important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi labore aliquid quaerat repudiandae quos rem? 
                        Adipisci odio quo aperiam alias dolorum quisquam, ipsam velit vitae necessitatibus impedit molestiae nemo facilis!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMore />} >
                    <Typography color={colors.greenAccent[500]} variant="h3">
                        Your Favorite Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi labore aliquid quaerat repudiandae quos rem? 
                        Adipisci odio quo aperiam alias dolorum quisquam, ipsam velit vitae necessitatibus impedit molestiae nemo facilis!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMore />} >
                    <Typography color={colors.greenAccent[500]} variant="h3">
                        An important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi labore aliquid quaerat repudiandae quos rem? 
                        Adipisci odio quo aperiam alias dolorum quisquam, ipsam velit vitae necessitatibus impedit molestiae nemo facilis!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMore />} >
                    <Typography color={colors.greenAccent[500]} variant="h3">
                        Another important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi labore aliquid quaerat repudiandae quos rem? 
                        Adipisci odio quo aperiam alias dolorum quisquam, ipsam velit vitae necessitatibus impedit molestiae nemo facilis!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMore />} >
                    <Typography color={colors.greenAccent[500]} variant="h3">
                        Final Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi labore aliquid quaerat repudiandae quos rem? 
                        Adipisci odio quo aperiam alias dolorum quisquam, ipsam velit vitae necessitatibus impedit molestiae nemo facilis!
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>

    )
}