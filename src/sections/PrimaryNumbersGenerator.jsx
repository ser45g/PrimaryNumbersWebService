import { useState } from "react";
import Button from "../components/Button";

import { useSelector, useDispatch } from "react-redux";
import { setPrimaryNumbers } from "../state/slices/primaryNumbersSlice";

const PrimaryNumbersGenerator = () => {
  
  const [fetchError, setFetchError] = useState("");
  const primaryNumbersObject=useSelector(state=>state.primaryNumbers.primaryNumbersObject);

  const [start, setStart] = useState(primaryNumbersObject?.start);

  const [end, setEnd] = useState(primaryNumbersObject?.end);

  const dispatch= useDispatch();
  
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!startNumberValid || !endNumberValid)
       return;
    const api_url = `https://localhost:7108/api/primary-numbers?start=${start}&end=${end}`;

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-Credentials", "true");

    setIsLoading((s) => true);
    setFetchError((s) => "");
    try {
      const response = await fetch(api_url, {
        method: "GET",
        headers: headers,
      });
      const pN = await response.json();

      if (!response.ok) {
        throw new Error(pN);
      }
    
      dispatch(setPrimaryNumbers(pN))
     
    } catch (ex) {
      setFetchError((error) => ex.message);
    } finally {
      setIsLoading((s) => false);
    }
  };

  const handleOnStartChange = (e) => {
    setStart((s) => e.target.value);
  };

  const handleOnEndChange = (e) => {
    setEnd((s) => e.target.value);
  };

  let startNumberValid = start >= 2;
  let endNumberValid = end >= 2;
  return (
    <section className="flex justify-center w-full flex-col">
      <article className="bg-white  py-8 px-6 w-full rounded-md p-3  shadow-xl  dark:bg-gray-900">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <div className="">
              <label
                htmlFor="start-number"
                className="block mb-2 text-sm font-medium text-black dark:text-white "
              >
                Start Number
              </label>
              <input required
                type="number"
                min={2}
                value={start}
                onChange={handleOnStartChange}
                id="start-number"
                className={`text-sm rounded-lg block w-full p-2.5 border-2 ${!startNumberValid ? 
                   "border-red-500 text-red-900 placeholder-red-700" :
                   "border-green-600 placeholder-green-700 text-green-900"
                  } dark:text-white text-black bg-stone-200 dark:bg-stone-800  `}
                placeholder="2"
              />
              {!startNumberValid ? 
                <p className="mt-2 text-sm text-red-600 dark:text-red-500  ">
                  The start must be greater or equal to 2
                </p>
               : "" }
            </div>
            <div>
              <label
                required
                htmlFor="username-error"
                className="block mb-2 text-sm font-medium text-black dark:text-white"
              >
                End number
              </label>
              <input
                type="number"
                value={end}
                onChange={handleOnEndChange}
                id="username-error"
                className={`border-2 ${
                  !endNumberValid ? "border-red-500 text-red-900 placeholder-red-700" : "border-green-600" } text-sm rounded-lg dark:text-white bg-stone-200 dark:bg-stone-800  block w-full p-2.5 `}
                placeholder="1000"
              />
              {!endNumberValid ? 
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  The end must be greater or equal to 2
                </p> : "" }
            </div>
            <div className="mt-4">
             <Button label={"Submit"}/>
            </div>
          </div>
        </form>
      </article>
      <article className="bg-white my-2 py-8 px-6 w-full rounded-md p-3 shadow-xl  dark:bg-gray-900">
        <h2 className="text-md text-black dark:text-white">{`Result in the range [${start}, ${end}]`}</h2>
        <h4 className="text-black dark:text-white">
          {`Found: `}
          <span className="underline text-blue-500">{`${primaryNumbersObject.total}`}</span>
        </h4>
        {isLoading ? <p className="text-green-400">Loading...</p> : ""}

        {!isLoading && (fetchError === "" || fetchError === null) ? (
          <ul className="px-1 py-2 mt-1 ">
            {primaryNumbersObject?.primaryNumbers?.map((num, index) => (
              <li key={num} className="odd:bg-red-100 even:bg-blue-100 text-black dark:text-white dark:odd:bg-stone-800 dark:even:bg-stone-600 rounded-md p-1 m-1.5" >
                {num}
              </li>
            ))}
          </ul>) : 
          <p className="text-red-500">{fetchError}</p>
        }
      </article>
    </section>
  );
};

export default PrimaryNumbersGenerator;
