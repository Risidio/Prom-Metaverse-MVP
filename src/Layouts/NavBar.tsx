import Icon from "../Components/Icons/Icon";

import message from '../assets/message.svg';
import bag from '../assets/bag.svg';
import friends from '../assets/friends.svg';
import notification from '../assets/notif.svg';

import online from '../assets/online.svg';
import absent from '../assets/absent.svg';
import offline from '../assets/offline.svg';

import WhiteButton from "../Components/Buttons/WhiteButton";
import Status from "../Components/Status/Status";
import { useState } from "react";


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

  const icons = [
    {
      iconName: 'message',
      iconPath: message,
    },

    {
      iconName: 'bag',
      iconPath: bag,
    },

    {
      iconName: 'friends',
      iconPath: friends,
    },

    {
      iconName: 'notification',
      iconPath: notification,
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
    // setSelectedStatusClass('block');
  }

  return (
    <section className="navbar">
      <div className="navbar__img-container">
        <div className="navbar__img-content"></div>

        {/* <div className="navbar__img-status-container">

        </div> */}
      </div>

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
          return (
            <Icon imgPath={icon.iconPath}
              imgAlt={icon.iconName}
              key={index} />
          )
        })}

        <WhiteButton pathLink="/fast-travel"
          text="Fast travel"
          className="button--fastTravel" />

      </div>

    </section>
  );
}

export default Navbar;