import { useState } from "react";
import { applicationFunctions } from "../constants";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex  flex-col items-center gap-3 justify-center">
      <div className="bg-white  py-8 px-6 rounded-md  flex-1 p-3 ring-1 ring-accent-primary shadow-xl w-full dark:bg-dark-bg-primary">
        <h3 className="font-bold dark:text-dark-text-primary text-stone-950 mb-2">
          Welcome to our application!
        </h3>
        <p className="text-light-text-secondary dark:text-dark-text-secondary text-base font-medium tracking-tight">
          This application allows you to work with primary numbers. It can be
          used for learning purposes
        </p>
      </div>

      <div className="bg-white flex-1 py-8 px-6 rounded-md  w-full p-3 ring-1 ring-accent-primary shadow-xl  dark:bg-dark-bg-primary my-2">
        <h3 className="font-bold dark:text-dark-text-primary text-stone-950 mb-2">
          Functionality
        </h3>
        <p className="text-light-text-secondary dark:text-dark-text-secondary text-base font-medium tracking-tight mb-3">
          This application has such functionalities, as:
        </p>
        <div id="accordion-open"  data-accordion="open">
          {applicationFunctions.map((func, index) => (
            <div key={ `accordion-item-${index}`}>
              <h2 id={`accordion-open-heading-${index}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border mt-1 border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-stone-900 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target={`#accordion-open-body-${index}`}
                  aria-expanded="false"
                  aria-controls={`accordion-open-body-${index}`}
                >
                  <span className="flex items-center">
                    <svg
                      className="w-5 h-5 me-2 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>{" "}
                    {func.header}
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-open-body-${index}`}
                className="hidden"
                aria-labelledby={`accordion-open-heading-${index}`}
              >
                <div className="p-5 border rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {func.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
