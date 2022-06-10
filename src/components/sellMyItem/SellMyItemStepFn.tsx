import React from "react";
import {STEP} from "./Const/SellMyStepConst";
import {goNextStep, goPrevStep} from "./Event/stepControl";

const SellMyItemStepFn: React.FC<STEP> = ({currentStep, setNextStep, setPrevStep}) => {
    const onNextStep = () => {
        const nextStep = goNextStep(currentStep);
        setNextStep(nextStep);
    }

    const onPrevStep = () => {
        const prevStep = goPrevStep(currentStep);
        setPrevStep(prevStep);
    }

    return (
        <div>
            <h6>SellMyItem Step Finish</h6>
            <button onClick={onNextStep}>확인</button>
        </div>
    );
}

export default SellMyItemStepFn;
