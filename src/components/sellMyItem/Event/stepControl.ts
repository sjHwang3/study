import { STEP_INFO } from "../Const/SellMyStepConst";

export const goNextStep: (step: string) => string = function (step) {
    for (const K in STEP_INFO) {
        if(K === step) {
            return STEP_INFO[step].nextStep;
        }
    }
};

export const goPrevStep: (step: string) => string = function (step) {
    for (const K in STEP_INFO) {
        if(K === step) {
            return STEP_INFO[step].prevStep;
        }
    }
};
