import { NavLink } from "react-router-dom";

type Props = {
  pathLink: string,
  className?: string,
  text: string,
}

const WhiteButton: React.FC<Props> = ({
  pathLink,
  className,
  text,
}) => {
  return (
    <NavLink to={pathLink}
      className="button button--white">
      <button className={`button__container button__container--white
  button-text button-text--white ${className}`}>
        {text}
      </button>
    </NavLink>


  )
}

export default WhiteButton