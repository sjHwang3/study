import React from "react";
import {STEP} from "./Const/SellMyStepConst";
import {goNextStep, goPrevStep} from "./Event/stepControl";

const SellMyItemStep3: React.FC<STEP> = ({currentStep, setNextStep, setPrevStep}) => {
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
            <h6>SellMyItem Step3</h6>
            <button onClick={onNextStep}>완료</button>
            <button onClick={onPrevStep}>취소</button>
        </div>
    );
}

export default SellMyItemStep3;
