// import Status from "../Status/Status";
import online from '../assets/online.svg';
import absent from '../assets/absent.svg';
import offline from '../assets/offline.svg';
import { useState } from 'react';
import Status from '../Status/Status';

// type Props = {
//   showStatusBar: () => void,
// }
const ProfilePopup = (
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
  const showStatusBar = () => {
    setSelectedStatusClass(prevClass => (prevClass === 'block' ? 'none' : 'block'));
  }

  const statusClickHandler = (statusName: string) => {
    setSelectedStatus(statusName);
  };


  return (
<section className="profile">
<div className="navbar__img-container">
        <div className="navbar__img-content"></div>

      </div>

      <button className={`navbar__status`}
        onClick={showStatusBar}>
        <img src={status.find(s => s.statusName === selectedStatus)?.statusPath}
          alt={status.find(s => s.statusName === selectedStatus)?.statusName} />
      </button>

      <Status statusClick={statusClickHandler}
        className={selectedStatusClass}></Status>

</section>
  );
}

export default ProfilePopup;