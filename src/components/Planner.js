import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css"
import "../App.css";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const locales = {
    // TODO: Change locale to finland
    "en-US": require("date-fns/locale/en-US")
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
});

// Test Data
const events = [
    {
        title: "Walk the Dog",
        start: new Date(2023, 1, 12),
        end: new Date(2023, 1, 12),
    },
    {
        title: "Go gym",
        start: new Date(2023, 1, 12),
        end: new Date(2023, 1, 12),
    },
    {
        title: "Upload work documents",
        start: new Date(2023, 1, 12),
        end: new Date(2023, 1, 12),
    }

    ];

export const Planner = () => {
    const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""});
    const [allEvents, setAllEvents] = useState(events);

    const handleAddEvent = () => {
        setAllEvents([...allEvents, newEvent]);
    };

    return (
        <div className="App">
            <Link to={"/users"}>
                <Button className={"mt-3 mb-3"}>
                    Change User
                </Button>
            </Link>

            <h1>Luka's Planner App</h1>
            <h2>Add New Event</h2>
            <div>
                <input
                    type="text"
                    placeholder={"Title"}
                    style={{
                        width: "20%",
                        marginRight: "10px"
                    }}
                    value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                />
                <DatePicker
                    placeholderText="Start"
                    style={{marginRight: "10px"}}
                    selected={newEvent.start}
                    onChange={(start) => setNewEvent({...newEvent, start})}
                />
                <DatePicker
                    placeholderText="End"
                    style={{marginRight: "10px"}}
                    selected={newEvent.end}
                    onChange={(end) => setNewEvent({...newEvent, end})}
                />
                <button
                    style={{
                        marginTop: "10px",
                    }}
                    onClick={handleAddEvent}
                >
                    Add Event
                </button>
            </div>
            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{
                    height: 500,
                    margin: "50px"
                }}
            />
        </div>
    );
}