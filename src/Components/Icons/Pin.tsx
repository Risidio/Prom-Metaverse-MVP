import { useState } from 'react';
import onBuildingHover from '../../assets/hover-building.svg';
import onBillboardHover from '../../assets/hover-billboard.svg';

interface PinProps {
  menuBuildingName: string;
  menuBuildingText: string;
  billboardName: string;
  billboardText: string;
}
const Pin: React.FC<PinProps> = ({
  menuBuildingName,
  menuBuildingText,
  billboardName,
  billboardText,
}) => {
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
          <div className='pin-heading-building-container'>
            <h2 className='pin-heading-building-primary'>{menuBuildingName}</h2>
          </div>
          <div className='pin-info-building-container'>
            <p className='pin-info-text'>{menuBuildingText}</p>
          </div>
        </div>
      )}
      {onBillboard && (
        <div className='billboard-wrapper'>
          <div className='pin-heading-billboard-container'>
            <h2 className='pin-heading-billboard-primary'>{billboardName}</h2>
          </div>
          <div className='pin-info-billboard-container'>
            <p className='pin-info-billboard-text'>{billboardText}</p>
          </div>
          <div className='billboard-btn-container'>
            <div className='billboard-ad-website-wrapper '>
              <button className='billboard-ad-website-btn'>
                Howdy website
              </button>
            </div>
            <div className='billboard-ad-billboard-wrapper'>
              <button className='billboard-ad-billboard-btn'>Billboard</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pin;
