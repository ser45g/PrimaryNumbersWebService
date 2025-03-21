

const ToggleThemeButton = () => {
  const toggleColor=()=>{
   
    document.body.classList.toggle('dark');
  };
  return (
    <button className='bg-accent-bg ring-1 ring-accent-primary text-accent-text rounded-md p-2' onClick={toggleColor}>Toggle Dark Mode</button>
  )
}

export default ToggleThemeButton