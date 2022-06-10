import exp from "constants";

export type EVAL_INFO_TYPE = {
    "receiptCode": string,
    "title": string,
    "start": string,
    "end": string,
    "allDay": boolean,
};

export const EVAL_INFO_SAMPLE: EVAL_INFO_TYPE = {
    receiptCode: "",
    title: "",
    start: "",
    end: "",
    allDay: false,
};

export const EVAL_LIST_SAMPLE: EVAL_INFO_TYPE[] = [
    { receiptCode: "C00001", title: "12가1234", start: "2022-06-10 09:00:00", end: "2022-06-10 09:30:00", allDay:false },
    { receiptCode: "C00002", title: "12나1234", start: "2022-06-10 10:00:00", end: "2022-06-10 10:30:00", allDay:false },
    { receiptCode: "C00003", title: "12다1234", start: "2022-06-11 15:00:00", end: "2022-06-11 15:30:00", allDay:false },
    { receiptCode: "C00004", title: "12라1234 ", start: "2022-06-12 12:00:00", end: "2022-06-10 12:30:00", allDay:false},
    { receiptCode: "C00005", title: "12마1234", start: "2022-06-13 18:00:00", end: "2022-06-10 18:30:00", allDay:false},
];




