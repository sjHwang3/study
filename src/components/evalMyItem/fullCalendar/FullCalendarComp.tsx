import React, {useEffect, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interActionPlugin from "@fullcalendar/interaction";
import {EVAL_INFO_SAMPLE, EVAL_INFO_TYPE, EVAL_LIST_SAMPLE} from "./Const/EvalInfo";

const FullCalendarComp: React.FC = (): JSX.Element => {
    const [event, setEvent] = useState<EVAL_INFO_TYPE>(EVAL_INFO_SAMPLE);
    const [events, setEvents] = useState<EVAL_INFO_TYPE[]>(EVAL_LIST_SAMPLE);

    const onSetEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEvent({
            ... event,
            [e.target.name]: e.target.value,
        });
    }

    const addEvents = () => {
        console.log("event ==> ", event);
        setEvents([
            ...events,
            event
        ]);
    }

    return(
        <div>
            <h3>Full-Calendar</h3>
            <input
                type={"text"}
                name={"title"}
                value={event.title}
                onChange={onSetEvent}
                placeholder={"번호"}
            />
            <input
                type={"text"}
                name={"start"}
                value={event.start}
                onChange={onSetEvent}
                placeholder={"시작일시"}
            />
            <button onClick={addEvents}>추가</button>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interActionPlugin]}
                headerToolbar={{
                    left: "prev, next, today",
                    center: "title",
                    right: "dayGridMonth, timeGridWeek, timeGridDay"
                }}
                weekends={true}
                initialView={"dayGridMonth"}
                events={events}
            />
        </div>
    )
}

export default FullCalendarComp;
