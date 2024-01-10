import { NavLink } from "react-router-dom"

 const WhiteButton = () => {
  return (
    <NavLink to={'/account'}
    className="button button--white">
    <div className="button__container button__container--white">
      <p className="button-text button-text--white">
        Sign in
      </p>
    </div>
  </NavLink>

  )
}

export default WhiteButton