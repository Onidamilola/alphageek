import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3, fa4, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Personal from './personal';
import Unique from './unique';
import Bank from './bank';
import Guarantor from './guarantor';
import Capture from './capture';

const MultiStepForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const formTitles = [
    { title: 'Personal', icon: fa1 },
    { title: 'Identification', icon: fa2 },
    { title: 'Accounts', icon: fa3 },
    { title: 'Guarantor', icon: fa4 },
  ];

  const nextStep = () => {
    if (step < formTitles.length) {
      setStep(step + 1);
    } else {
      // Handle form submission or completion logic
    }
  };

  const prevStep = () => {
    if (step > 1) {
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
        <Unique nextStep={nextStep} prevStep={prevStep} />
      );
      break;
    case 3:
      currentStepComponent = (
        <Bank nextStep={nextStep} prevStep={prevStep} />
      );
      break;
    case 4:
      currentStepComponent = (
        <Guarantor nextStep={nextStep} prevStep={prevStep} />
      );
      break;
    case 5:
      currentStepComponent = (
        <Capture nextStep={nextStep} prevStep={prevStep} />
      );
      break;
    default:
      currentStepComponent = null;
      break;
  }

  return (
    <div className="">
      <div className="mb-20 bg-blue-600 p-4">
        <div className="relative pt-1">
          <div className="flex items-start">
            <div className="flex flex-row w-full justify-between bg-white">
              {formTitles.map((item, index) => (
                <div key={index} className="flex flex-col items-center ">
                  {index > 0 && (
                    <div
                      className={`${
                        index < step
                          ? 'bg-text-semiblack'
                          : 'bg-step-gray'
                      } h-1 w-12`}
                    ></div>
                  )}
                  <div
                    key={index}
                    className={` mt-4 text-sm ${
                      index < step
                        ? 'text-[#7563d0]'
                        : 'text-gray-500'
                    } flex flex-col items-center`}
                  >
                    <div className='flex gap-2 justify-center align-center py-3'>
                      {index < step ? (
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="mr-2 text-[#7563d0]"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={item.icon}
                          className="mr-2 text-white bg-[#7563d0] rounded-full text-sm p-[5px]"
                        />
                      )}
                      <div>
                        <div className='w-[30px] text-[#7563d0] border border-bottom border-[#7563d0] mt-3'></div>
                      </div>
                    </div>
                    {item.title}
                  </div>
                  {index < formTitles.length - 1 && (
                    <div
                      className={`${
                        index < step - 1
                          ? 'bg-text-semiblack'
                          : 'bg-step-gray'
                      } h-1 w-12`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
            <Link to="/personal/unique/bank/guarantor"></Link>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="mx-auto">{currentStepComponent}</div>
      </div>
    </div>
  );
};

export default MultiStepForm;
