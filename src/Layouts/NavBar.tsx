import Icon from "../Components/Icons/Icon";

import message from '../assets/message.svg';
import bag from '../assets/bag.svg';
import friends from '../assets/friends.svg';
import notification from '../assets/notif.svg';

import online from '../assets/online.svg';
import absent from '../assets/absent.svg';
import offline from '../assets/offline.svg';

import WhiteButton from "../Components/Buttons/WhiteButton";
import Status from "./Status/Status";
import { useState } from "react";
import BagPopup from "./Popup/NavBarPopup/BagPopup";
import FastTravelPopup from "./Popup/NavBarPopup/FastTravelPopup";
import FriendsPopup from "./Popup/NavBarPopup/FriendsPopup";
import MessagePopup from "./Popup/NavBarPopup/MessagePopup";
import NotificationPopup from "./Popup/NavBarPopup/NotificationPopup";
import ProfilePopup from "./Popup/NavBarPopup/ProfilePopup";
// import PopupMessage from "./PopupMessage";
// import MessagePopup from "./Popup/NavBarPopups/MessagePopup";
// import BagPopup from "./Popup/NavBarPopups/NavBarPopup/BagPopup";
// import FriendsPopup from "./Popup/NavBarPopups/FriendsPopup";
// import NotificationPopup from "./Popup/NavBarPopups/NotificationPopup";
// import FastTravelPopup from "./Popup/NavBarPopups/NavBarPopup/FastTravelPopup";
// import ProfilePopup from "./Popup/NavBarPopups/ProfilePopup";


type Props = {
  userName: string,
  level: number,
}

const Navbar: React.FC<Props> = (
  { userName,
    level,
  }
) => {

  const [selectedStatus, setSelectedStatus] = useState<string>('online'); // State to store the selected status
  const [selectedStatusClass, setSelectedStatusClass] = useState('none');


  const [popupVisibility, setPopupVisibility] = useState<{ [key: number]: boolean }>({});
  const [popupMessageVisibility, setPopupMessageVisibility] = useState(false);
  const [popupProfile, setPopupProfile] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  const togglePopup = (index: number) => {
    setPopupVisibility((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const showFastPopup = () => {
    setPopupMessageVisibility(!popupMessageVisibility);
  }

  const showProfilePopup = () => {
    setPopupProfile(!popupProfile);
  }

  const icons = [
    {
      iconName: 'message',
      iconPath: message,
      PopupContent: MessagePopup,
    },

    {
      iconName: 'bag',
      iconPath: bag,
      PopupContent: BagPopup,

    },

    {
      iconName: 'friends',
      iconPath: friends,
      PopupContent: FriendsPopup,

    },

    {
      iconName: 'notification',
      iconPath: notification,
      PopupContent: NotificationPopup,

    },

  ];

  const status = [
    {
      statusName: 'online',
      statusPath: online,
    },

    {
      statusName: 'absent',
      statusPath: absent,
    },

    {
      statusName: 'offline',
      statusPath: offline,
    },


  ];

  const statusClickHandler = (statusName: string) => {
    setSelectedStatus(statusName);
  };

  const showStatusBar = () => {
    setSelectedStatusClass(prevClass => (prevClass === 'block' ? 'none' : 'block'));
  }

  return (
    <section className="navbar">
      <button
        onClick={showProfilePopup}
        className="navbar__img-container">
        <div className="navbar__img-content"></div>


      </button>

      {popupProfile && <ProfilePopup
          userName="User Name"></ProfilePopup>}


      <button className={`navbar__status`}
        onClick={showStatusBar}>
        <img src={status.find(s => s.statusName === selectedStatus)?.statusPath}
          alt={status.find(s => s.statusName === selectedStatus)?.statusName} />
      </button>

      <Status statusClick={statusClickHandler}
        className={selectedStatusClass}></Status>


      <div className="navbar__title-container">
        <h1 className="navbar__title-text navbar__title-text--name">
          {`Hi {${userName}}`}
        </h1>
        <h2 className="navbar__title-text navbar__title-text--level">
          Level {level}
          {' '}
          <span className="navbar__title-text 
          navbar__title-text--level
          navbar__title-text--next">Reach lvl {level + 1} to earn 100</span>
        </h2>
      </div>

      <div className="navbar__icons-container">

        {icons.map((icon, index) => {
          const PopupContent = icon.PopupContent;

          return (
            <>
              <Icon
                imgPath={icon.iconPath}
                imgAlt={icon.iconName}
                key={index}
                onClick={() => togglePopup(index)}
              />

              {popupVisibility[index] && PopupContent && (
                // Используем переменную с компонентом
                <PopupContent key={index} contactValue={searchInput}
                  handleInputChange={handleInputChange}
                />
              )}
            </>


          )
        })}

        <WhiteButton
          text="Fast travel"
          className="button--fastTravel"
          onClick={showFastPopup} />

        {popupMessageVisibility &&
          <FastTravelPopup></FastTravelPopup>

        }


      </div>


    </section>
  );
}

export default Navbar;