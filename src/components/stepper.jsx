import React from "react";
import { Check, Circle } from "react-feather";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <ol className="flex items-center">
        {steps.map((step, index) => (
          <li key={index} className="flex-1 relative">
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index < currentStep
                    ? "bg-green-500"
                    : index === currentStep
                    ? "bg-blue-500"
                    : "bg-gray-300"
                }`}
              >
                {index < currentStep ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <Circle
                    className={`w-5 h-5 ${
                      index === currentStep ? "text-white" : "text-gray-500"
                    }`}
                  />
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 ${
                    index < currentStep
                      ? "bg-green-500"
                      : index === currentStep
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
            <div className="mt-2">
              <h3
                className={`text-sm font-medium ${
                  index <= currentStep ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {step.title}
              </h3>
              <p className="mt-1 text-xs text-gray-500">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Stepper;
