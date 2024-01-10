import { NavLink } from "react-router-dom";

type Props = {
pathLink: string,
}

const RedButton: React.FC<Props> = ( {pathLink}) => {
  return (
    <NavLink to={pathLink}
      className="button button--red">
      <div className="button__container button__container--red">
        <p className="button-text button-text--red">
          Create an account
        </p>
      </div>
    </NavLink>
  );
}

export default RedButton