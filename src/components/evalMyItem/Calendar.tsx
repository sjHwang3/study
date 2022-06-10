import React, {useState} from "react";
import FullCalendarComp from "./fullCalendar/FullCalendarComp";
import ReactCalendarComp from "./reactCalendar/ReactCalendarComp";

const Calendar: React.FC = (): JSX.Element => {
    const [state, setState] = useState<string>();

    console.log(state);

    return (
        <div>
            <button onClick={() => {setState("full")}}>Full Calendar</button>
            <button onClick={() => {setState("react")}}>React Calendar</button>
            <button onClick={() => {setState("")}}>Cancel</button>
            {state == "full" && <FullCalendarComp />}
            {state == "react" && <ReactCalendarComp />}
        </div>
    )
}

export default Calendar;
