export const STEP_INFO : object = {
    "step1": {
        "prevStep": "",
        "nextStep": "step2",
    },
    "step2": {
        "prevStep": "",
        "nextStep": "step3",
    },
    "step3" : {
        "prevStep": "",
        "nextStep": "stepFn",
    },
    "stepFn" : {
        "prevStep": "",
        "nextStep": ""
    }
}

export type STEP = {
    "currentStep": string;
    "setNextStep": Function;
    "setPrevStep": Function;
};
