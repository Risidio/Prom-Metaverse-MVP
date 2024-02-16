// import Status from "../Status/Status";

import online from '../../../assets/online.svg';
import absent from '../../../assets/absent.svg';
import offline from '../../../assets/offline.svg';
import { useState } from 'react';
import Status from '../../Status/Status';
import TransparentButton from '../../../Components/Buttons/TransparentButton';
import RedButton from '../../../Components/Buttons/RedButton';
import TriangleDiv from '../../../Components/TriangleDiv';
import UserProfile from './UserProfile';

type Props = {
  // showStatusBar: () => void,
  userName: string,
}
const ProfilePopup: React.FC<Props> = (
  {
    userName,

  }
  // showStatusBar,
) => {
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
  const [selectedStatus, setSelectedStatus] = useState<string>('online'); // State to store the selected status
  const [selectedStatusClass, setSelectedStatusClass] = useState('none');

  const [userProfileVisibility, setUserProfileVisibility] = useState(false);

  const showStatusBar = () => {
    setSelectedStatusClass(prevClass => (prevClass === 'block' ? 'none' : 'block'));
  }

  const statusClickHandler = (statusName: string) => {
    setSelectedStatus(statusName);
  };

  const showUserProfile = () => {
    setUserProfileVisibility(!userProfileVisibility);
    console.log(1);
  }

  const handleCloseModal = () => {
    setUserProfileVisibility(false);
  }


  return (
    <article className="profile">
      <section className='profile__info'>
        <div className='profile__info-img'>
          <div className="navbar__img-container
          navbar__img-container--profile">
            <div className="navbar__img-content"></div>
            <button className={`navbar__status navbar__status--profile`}
              onClick={showStatusBar}>
              <img src={status.find(s => s.statusName === selectedStatus)?.statusPath}
                alt={status.find(s => s.statusName === selectedStatus)?.statusName} />
            </button>

            <Status statusClick={statusClickHandler}
              className={selectedStatusClass}></Status>

          </div>


        </div>

        <div className='profile__info-text'>
          <h1 className='profile__info-title'>{userName}</h1>
          <p className='profile__info-level'>
            Level 12
            {' '}
            <span className='profile__info-level profile__info-level--reward'>Next reward 100</span>
          </p>
        </div>
      </section>

      <section className='profile__buttons'>
        <TransparentButton text='My profile'
          type='button'
          className='button--my-profile'
          onClick={showUserProfile}></TransparentButton>

        <RedButton text='Log out'
          type='button'
          className='button--my-profile button--log-out'></RedButton>
      </section>

      <section className='profile__wallet'>
        <svg className='profile__wallet-img'
          width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Vector" d="M46 8H6C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H40C40.5304 4 41.0391 3.78929 41.4142 3.41421C41.7893 3.03914 42 2.53043 42 2C42 1.46957 41.7893 0.96086 41.4142 0.585787C41.0391 0.210714 40.5304 0 40 0H6C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6V38C0 39.5913 0.632141 41.1174 1.75736 42.2426C2.88258 43.3679 4.4087 44 6 44H46C47.0609 44 48.0783 43.5786 48.8284 42.8284C49.5786 42.0783 50 41.0609 50 40V12C50 10.9391 49.5786 9.92172 48.8284 9.17157C48.0783 8.42143 47.0609 8 46 8ZM37 28C36.4067 28 35.8266 27.8241 35.3333 27.4944C34.8399 27.1648 34.4554 26.6962 34.2284 26.148C34.0013 25.5999 33.9419 24.9967 34.0576 24.4147C34.1734 23.8328 34.4591 23.2982 34.8787 22.8787C35.2982 22.4591 35.8328 22.1734 36.4147 22.0576C36.9967 21.9419 37.5999 22.0013 38.148 22.2284C38.6962 22.4554 39.1648 22.8399 39.4944 23.3333C39.8241 23.8266 40 24.4067 40 25C40 25.7956 39.6839 26.5587 39.1213 27.1213C38.5587 27.6839 37.7957 28 37 28Z" fill="#5B6179" />
        </svg>

        <p className='profile__wallet-text'>
          No wallet connectet
        </p>

        <TransparentButton type='button'
          text='Connect wallet'
          className='button--wallet'
        ></TransparentButton>

      </section>

      <TriangleDiv classNameSecond='triangle-up--profile'></TriangleDiv>



      {userProfileVisibility &&
       <UserProfile
        userName={'Username'}
        roles={['Screenwriter', 'Director', 'Producer']}
        pronouns={'(He / Him)'}
        scriptNumber={1}
        closeModal={handleCloseModal}
        ></UserProfile>
      }

    </article>

  );
}

export default ProfilePopup;