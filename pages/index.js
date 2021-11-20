import React, { useMemo, useState } from "react";
import Steps from "../components/m-steps.js";
const { Step } = Steps;
const Home = () => {
  const steps = useMemo(
    () => [
      {
        title: "Accept offer",
        value: "Accept offer"
      },
      {
        title: "Preview email",
        value: "Preview email"
      },
      {
        title: "Pending supplier",
        value: "Pending supplier"
      },
      {
        title: "Invoice paid",
        value: "final program"
      }
    ],
    []
  );
  const [step, setStep] = useState(0);
  const handleStep = (v) => setStep(v);
  return (
    <div className="text-sans pt-5">
      <Steps current={step}>
        {steps.map((step) => (
          <Step key={step.value} title={step.title} />
        ))}
      </Steps>
      <div className="flex flex-row mx-auto items-center justify-center">
        <div
          onClick={() => handleStep(step === 0 ? 0 : step - 1)}
          className="bg-purple-500 mr-5 cursor-pointer"
        >
          Previous
        </div>
        <div
          onClick={() =>
            handleStep(
              step === steps?.length - 1 ? steps?.length - 1 : step + 1
            )
          }
          className="bg-gray-500 cursor-pointer"
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default Home;
