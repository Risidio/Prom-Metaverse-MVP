import { useState } from 'react';
import onBuildingHover from '../../assets/hover-building.svg';
import onBillboardHover from '../../assets/hover-billboard.svg';

interface PinProps {
  menuBuildingName: string;
  menuBuildingText: string;
}
const Pin: React.FC<PinProps> = ({ menuBuildingName, menuBuildingText }) => {
  const [onBuilding, setOnBuilding] = useState<boolean>(false);
  const [onBillboard, setOnBillboard] = useState<boolean>(false);

  return (
    <div className='pin-container'>
      <img
        src={onBuildingHover}
        alt=''
        className='onBuildingHover'
        onMouseEnter={() => setOnBuilding(true)}
        onMouseLeave={() => setOnBuilding(false)}
      />
      <img
        src={onBillboardHover}
        alt=''
        className='onBillboardHover'
        onMouseEnter={() => setOnBillboard(true)}
        onMouseLeave={() => setOnBillboard(false)}
      />
      {onBuilding && (
        <div className='building-wrapper'>
          <div className='pin-heading-container'>
            <h2 className='pin-heading-primary'>{menuBuildingName}</h2>
          </div>
          <div className='pin-info-container'>
            <p className='pin-info-text'>{menuBuildingText}</p>
          </div>
        </div>
      )}
      {onBillboard && (
        <div className='billboard-wrapper'>
          <div className='pin-heading-container'>
            <h2 className='pin-heading-primary'>{menuBuildingName}</h2>
          </div>
          <div className='pin-info-container'>
            <p className='pin-info-text'>{menuBuildingText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pin;
