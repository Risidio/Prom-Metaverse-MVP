// import { NavLink } from "react-router-dom"

// const WhiteButton = () => {
//   return (
//     <NavLink to={'/signin'}
//       className="button button--white">
//       <button className="button__container button__container--white
//   button-text button-text--white">
//         Sign in
//       </button>
//     </NavLink>


//   )
// }

// export default WhiteButton


type Props = {
  className?: string,
  text: string,
  type?: "button" | "submit",
}

const WhiteButton: React.FC<Props> = ({
  className,
  text,
  type,

}) => {
  return (
    <button className={`${className}
    bg-[#fff] 
    rounded-full 
    text-[#30374D]
    font-jost 
    text-[17px] 
    font-semibold
    button--white`}
   type={type}>
   {text}
 </button>

  //   <NavLink to={pathLink}
  //     className="button button--white">
  //     <button className={`button__container button__container--white
  // button-text button-text--white ${className}`}>
  //       {text}
  //     </button>
  //   </NavLink>


  )
}

export default WhiteButton