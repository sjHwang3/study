import React from "react";
import SellMyItem from "./sellMyItem/SellMyItem";
import Calendar from "./evalMyItem/Calendar";

const Main: React.FC = () => {
    return (
        <div>
            <h1>Hello React World?</h1>
            <SellMyItem step={""}/>
            <Calendar />
        </div>
    );
}

export default Main;
