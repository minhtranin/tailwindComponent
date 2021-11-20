import { Children } from "react";
// eslint-disable-next-line no-unused-vars
const Step = ({ title }) => {
  return <></>;
};

GStep.Step = Step;

export default function GStep({ children, current }) {
  const numberOfStep = Children.count(children);
  if (!numberOfStep) return <></>;
  return (
    <div className="p-5">
      <div className="mx-4 p-4">
        <div className="flex items-center">
          {Children.map(children, (step, index) =>
            step?.type?.name === Step.name ? (
              <>
                <div className="flex items-center text-purple-500 relative">
                  <div
                    className={`m${
                      index === 0 ? "r" : index === numberOfStep - 1 ? "l" : "x"
                    }-1 flex items-center justify-center rounded-full transition duration-500 ease-in-out h-6 w-6 py-1 border-2 ${
                      index <= current
                        ? "bg-purple-500 border-purple-500"
                        : " bg-gray-300 border-gray-300"
                    }`}
                  >
                    {index < current && (
                      <span className={"icon icon-check text-white"} />
                    )}
                  </div>
                  <div
                    className={`absolute bottom-[-25px] -ml-15 text-center mb-16 w-36 text-sm font-medium ${
                      index === current ? "text-purple-600" : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`${
                        current !== index ? "hidden" : ""
                      } lg:block`}
                    >
                      {step.props.title}
                    </span>
                  </div>
                </div>
                {index !== numberOfStep - 1 && numberOfStep !== 1 && (
                  <div
                    className={`flex-auto border-t-4 transition duration-500 ease-in-out ${
                      index < current ? "border-purple-500" : " border-gray-300"
                    }`}
                  />
                )}
              </>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}
