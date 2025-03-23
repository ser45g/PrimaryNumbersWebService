import {
  SunIcon, MoonIcon
} from "@heroicons/react/20/solid";
import { useState } from "react";

const ToggleThemeButton = () => {
  const isDarkModeDefault=document.body.classList.contains('dark');
  
  const [isDark, setIsDark]=useState(isDarkModeDefault);

  const toggleColor=()=>{
    const previousMode=document.body.classList.contains('dark');
   
    setIsDark(s=>!previousMode);
    document.body.classList.toggle('dark');
  };
  return (
    <button className='text-yellow-600  dark:text-blue-200  rounded-md p-2' onClick={toggleColor}>
      { isDark?
        <MoonIcon className="w-8"/>:
        <SunIcon className="w-8"/>
      }
    </button>

    
  )
}

export default ToggleThemeButton