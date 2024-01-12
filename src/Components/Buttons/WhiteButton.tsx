import { NavLink } from "react-router-dom"

const WhiteButton = () => {
  return (
    <NavLink to={'/account'}
      className="button button--white">
      <button className="button__container button__container--white
  button-text button-text--white">
        Sign in
      </button>
    </NavLink>


  )
}

export default WhiteButton