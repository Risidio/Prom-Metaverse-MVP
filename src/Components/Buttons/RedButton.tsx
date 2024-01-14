import { NavLink } from "react-router-dom";

type Props = {
  pathLink: string,
  className?: string,
  text: string,
}

const RedButton: React.FC<Props> = ({ 
  pathLink,
   className, 
  text }) => {
  return (
    <NavLink to={pathLink}
      className={`button button--red  ${className}`}>
      <button className="button__container button__container--red button-text button-text--red">
        {text}
      </button>
    </NavLink>

  );
}

export default RedButton