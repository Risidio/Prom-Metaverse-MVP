import classNames from "classnames";
import { useState } from "react";
import TransparentButton from "../../../Components/Buttons/TransparentButton";
import RedButton from "../../../Components/Buttons/RedButton";

type Props = {
  userName: string,
  userActionDescription: string,
}

const NotificationCard: React.FC<Props> = ({
  userName,
  userActionDescription,
}) => {

  const [activeButton, setActiveButton] = useState(false);
  // const [buttonsVisible, setButtonsVisible] = useState(false);


  const handlerClick = () => {
    setActiveButton(!activeButton);


  }

  const handlerAccept = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

  }
  return (
    <button
      className={classNames(
        "notification__card",
        { "notification__card--active": activeButton }
      )}
      type="button"
      onClick={handlerClick}>

      <div className="notification__card-top">
        <div className="navbar__img-content navbar__img-content--notification"></div>

        <div className="notification__card-top--text">
          <h1 className="notification__card-title">
            New
          </h1>


          <p className="notification__card-description">
            {userName} {userActionDescription}
          </p>


        </div>
      </div>

      <div
        className={classNames(
          "notification__card-buttons",
          {
            "notification__card-buttons--block": activeButton,

          }
        )}
      >
        <TransparentButton text="Deny"
          className="button--transparent"
          onClick={(event) => handlerAccept(event)} />

        <RedButton text="Accept"
          onClick={(event) => handlerAccept(event)}
          className="button--accept" />
      </div>
    </button>
  );
}

export default NotificationCard;