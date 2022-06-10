import React, {useEffect, useState} from "react";
import SellMyItemStep1 from "./SellMyItemStep1";
import SellMyItemStep2 from "./SellMyItemStep2";
import SellMyItemStep3 from "./SellMyItemStep3";
import SellMyItemStepFn from "./SellMyItemStepFn";

interface STEP {
    step: string
}

const SellMyItem: React.FC<STEP> = ({ step }): JSX.Element => {

    const [currentStep, setCurrentStep] = useState<string>("");

    const setNextStep: Function = (nextStep: string) => {
        setCurrentStep(nextStep);
    }

    const setPrevStep: Function = (prevStep: string) => {
        setCurrentStep(prevStep);
    }

    return (
        <div>
            <h4>SellMyItem</h4>
            <div className={"sellForm"}>
                { currentStep == "" &&
                    <button onClick={() => {setNextStep("step1")}}>
                        접수
                    </button>
                }
                { currentStep == "step1" &&
                    <SellMyItemStep1
                        currentStep={currentStep}
                        setNextStep={setNextStep}
                        setPrevStep={setPrevStep}
                    />
                }
                {currentStep == "step2" &&
                    <SellMyItemStep2
                        currentStep={currentStep}
                        setNextStep={setNextStep}
                        setPrevStep={setPrevStep}
                    />
                }
                {currentStep == "step3" &&
                    <SellMyItemStep3
                        currentStep={currentStep}
                        setNextStep={setNextStep}
                        setPrevStep={setPrevStep}
                    />
                }
                {currentStep == "stepFn" &&
                    <SellMyItemStepFn
                        currentStep={currentStep}
                        setNextStep={setNextStep}
                        setPrevStep={setPrevStep}
                    />
                }
            </div>
        </div>
    );
}

export default SellMyItem;
