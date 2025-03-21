
const Button = ({imageUrl, label}) => {
  return (
    <button className="">
      {label}
      {  imageUrl!==null?   
      <img src={imageUrl} alt="" />:
      <p></p> }
    </button>
  )
}

export default Button