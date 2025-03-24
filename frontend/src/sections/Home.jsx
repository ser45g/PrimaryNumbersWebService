import { useState } from "react";
import { applicationFunctions } from "../constants";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

import { ChevronDownIcon, QuestionMarkCircleIcon} from "@heroicons/react/20/solid";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <section className="flex  flex-col items-center gap-3 justify-center ">
      <article className="bg-white  py-8 px-6 rounded-md  flex-1 p-3 shadow-xl w-full dark:bg-gray-900">
        <h3 className="font-bold dark:text-white text-stone-950 mb-2">
          Welcome to our application!
        </h3>
        <p className="text-stone-700 dark:text-stone-300 text-base font-medium tracking-tight">
          This application allows you to work with primary numbers. It can be
          used for learning purposes.
        </p>
      </article>

      <article className="bg-white flex-1 py-8 px-6 rounded-md  w-full p-3 shadow-xl  dark:bg-gray-900 my-2">
        <h3 className="font-bold dark:text-white text-stone-950 mb-2">
          Functionality
        </h3>
        <p className="text-stone-700 dark:text-stone-300 text-base font-medium tracking-tight mb-3">
          This application has such functionalities as:
        </p>
        <ul id="accordion-open" data-accordion="open">
          {applicationFunctions.map((func, index) => (
            <li key={`accordion-item-${index}`} className="mt-2">
              <Disclosure>
                <DisclosureButton className="group flex items-center gap-2 w-full ">
                  <div className="flex flex-row items-center gap-2 justify-between w-full p-3 font-medium rtl:text-right text-gray-500 border  border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-stone-900  dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-stone-800">
                    <div className="flex flex-row gap-1">
                      <QuestionMarkCircleIcon className="w-5 group-data[open]:text-red-500" />
                      <h3 className="">{func.header}</h3>
                      {!func.isImplemented?
                      <span className="text-blue-400 dark:text-blue-300"> (in future versions)</span>:""}
                    </div>

                    <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
                  </div>
                </DisclosureButton>
                <DisclosurePanel>
                  <div className="p-5 border rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      {func.description}
                     
                    </p>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Home;
