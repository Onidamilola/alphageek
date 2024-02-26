import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Personal from './personal';
import Unique from './unique'
import Bank from './bank'
import Guarantor from './guarantor'
import Capture from './capture'

const MultiStepForm = () => {
    const navigate = useNavigate()
  const [step, setStep] = useState(1);

  const formTitles = ['Personal Information', 'Unique Identification', 'Bank Account', 'Guarantor Information', 'Capture Image'];

  const nextStep = () => {
    if(step === 3){
      navigate("Personal Information/Unique Identification/Bank Account/Guarantor Information/Capture Image")
    }
    else{
      setStep(step + 1);
    }
    
  };

  const prevStep = () => {
    if(step === 1){
        navigate("Personal Information/Unique Identification/Bank Account/Guarantor Information/Capture Image")
    }
    else{
       setStep(step - 1); 
    }
    
  };

  const isLastStep = step === formTitles.length;
  const isFirstStep = step === 1;

  let currentStepComponent;

  switch (step) {
    case 1:
      currentStepComponent = (
        <Personal nextStep={nextStep} prevStep={prevStep} />
      );
      break;
    case 2:
      currentStepComponent = (
        <Unique nextStep={nextStep} prevStep={prevStep}/>
      );
      break;
    case 3:
      currentStepComponent = (
        <Bank nextStep={nextStep} prevStep={prevStep}/>
      );
      break;
      case 4:
        currentStepComponent = (
          <Guarantor nextStep={nextStep} prevStep={prevStep}/>
        );
        break;
        case 5:
            currentStepComponent = (
              <Capture nextStep={nextStep} prevStep={prevStep}/>
            );
            break;
    default:
      currentStepComponent = null;
      break;
  }

  return (
    <div className="mt-10 px-14">
      <div className="mb-20">
        <div className="relative pt-1">
          <div className="flex items-start">
            <div className="flex flex-row w-full gap-2 justify-center">
              {formTitles.map((title, index) => (
                <div
                  key={index}
                  className={`${
                    index < step - 1
                      ? 'bg-text-semiblack h-1'
                      : index === step - 1
                      ? 'bg-text-semiblack h-1'
                      : 'bg-step-gray h-1'
                  } rounded-lg transition-all ease-in-out duration-300`}
                >
                  <div
                    className={`text-sm font-semibold capitalize ${
                      index < step - 1 ? 'text-black' : 'text-black'
                    } mt-2`}
                  >
                    {title}
                  </div>
                  <div className="text-left py-1.5 pl-2 pr-4 h-2 w-[118px]"></div>
                </div>
              ))}
            </div>
            <Link to='/dashboard/transactions/make-a-transfer'>
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-full">
        <div className="mx-auto">
          {currentStepComponent}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;