import { useState } from "react";
const PrimaryNumbersGenerator = () => {

  const [start, setStart] = useState(2);
  const [end, setEnd]=useState(1000);

  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("done");
  };

  const handleOnStartChange=(e)=>{
    setStart(s=>e.target.value);
  };

  const handleOnEndChange=(e)=>{
    setEnd(s=>e.target.value);
  };

  let startNumberValid=start >= 2;
  let endNumberValid=end >=2;
  return (
    <div className="flex justify-center w-full">
      <div className="bg-white  py-8 px-6 w-full rounded-md p-3 ring-1 ring-accent-primary shadow-xl  dark:bg-dark-bg-primary">
        <form action="get" >
          <div className="flex flex-col gap-3">
               <div className="">
            <label
              htmlFor="start-number"
              className="block mb-2 text-sm font-medium "
            >
              Start Number
            </label>
            <input
              required
              type="number"
              min={2}
              value={start}
              onChange={handleOnStartChange}
              id="start-number"
              className={` text-sm rounded-lg block w-full p-2.5 border-2 ${!startNumberValid?"border-red-500 text-red-900 placeholder-red-700":"" } dark:text-white text-black bg-stone-200 dark:bg-stone-800 ${startNumberValid? "border-green-600":""}`}
              placeholder="2"
            />
            { !startNumberValid? 
            <p class="mt-2 text-sm text-green-600 dark:text-green-500  ">
              <span class="font-medium">Alright!</span> Username available!
            </p>:
            "" }
          </div>
          <div>
            <label
            required
              htmlFor="username-error"
              className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
            >
              End number
            </label>
            <input
              type="number"
              value={end}
              onChange={handleOnEndChange}
              id="username-error"
              className={`border-2 ${!endNumberValid?"border-red-500 text-red-900 placeholder-red-700":"" } text-sm rounded-lg dark:text-white ${endNumberValid? "border-green-600":""} bg-stone-200 dark:bg-stone-800  block w-full p-2.5 `}
              placeholder="1000"
            />
            { !endNumberValid?
             <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> Username already taken!
            </p>:
            ""
            }
           
          </div>
          <div>
          <button type="submit" className="text-white bg-blue-400 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

          </div>
          </div>
       
        </form>
      </div>
    </div>
  );
};

export default PrimaryNumbersGenerator;
