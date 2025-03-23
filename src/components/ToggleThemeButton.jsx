import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";

import { useSelector, useDispatch } from "react-redux";
import { setAppColorMode } from "../state/slices/appColorModeSlice";

const ToggleThemeButton = () => {
  const appColorMode=useSelector(state=>state.appColorMode.appColorMode);

  const isDark=appColorMode==='dark';

  if(isDark)
    document.body.classList.add('dark');

  const dispatch = useDispatch();

  const toggleColor=()=>{
    const previousMode=document.body.classList.contains('dark');
   
    dispatch(setAppColorMode(previousMode? 'light' :'dark'));
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