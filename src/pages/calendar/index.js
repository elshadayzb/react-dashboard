import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list;"
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import { colorTokens } from '../../theme';
import Header from '../../components/Header';
import { formatDate } from '@fullcalendar/core';

export default function Calendar(){
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    const[currentEvents, setCurrentEvents] = useState();

    function handleDateClick(selected){
        const title = prompt("Please enter the title for the event.");
        const calendarApi = selected.view.calendar;
        calendarApi.unSelect();

        if(title){
            calendarApi.addEvent({
                id: `${selected.dateStr}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }
    }

    function handleEventClick(selected){
        if(window.confirm(`Are you sure you want to delete the event? ${selected.event.title}`)){
            selected.event.remove();
        }
        
    }

    return(
        <Box sx={{m: "20px"}}>
            <Header title="CALENDAR" subtitle="Full Calendar Interaction Page"/>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between"
            }}
            >
                <Box sx={{
                        flex: "1 1 20%", 
                        backgroundColor: colors.primary[400],
                        p: "15px",
                        borderRadius: "4px"
                    }}
                >
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event, index) => {
                            return(
                                <ListItem 
                                    key={index}
                                    sx={{
                                        backgroundColor: colors.greenAccent[500],
                                        margin: "10px 0",
                                        borderRadius: "2px"
                                    }}
                                >
                                    <ListItemText 
                                        primary={event.title}
                                        secondary={
                                            <Typography>
                                                {formatDate(event.start, {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric"
                                                }) }
                                            </Typography>
                                        }
                                    >

                                    </ListItemText>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
                <Box sx={{flex: "1 1 100%", ml: "15px"}}>
                    <FullCalendar 
                        height="75vh"
                        plugins={{
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin
                        }}
                        headerToolbar={{
                            left: "prev, next, today",
                            center: "title",
                            right: "dayGridMonth, timeGridWeek, timeGridDay, listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                    />
                </Box>
            </Box>
        </Box>
        

    )
}