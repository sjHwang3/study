import React from "react";
import {goNextStep, goPrevStep} from "./Event/stepControl";
import {STEP} from "./Const/SellMyStepConst";

const SellMyItemStep2: React.FC<STEP> = ({currentStep, setNextStep, setPrevStep}) => {
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
            <h6>SellMyItem Step2</h6>
            <button onClick={onNextStep}>다음</button>
            <button onClick={onPrevStep}>취소</button>
        </div>
    );
}

export default SellMyItemStep2;
