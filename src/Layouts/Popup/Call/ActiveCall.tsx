import classNames from 'classnames';
import redDialIcon from '../../../assets/redDialIcon.svg';
import mute from '../../../assets/mute.svg';
import hangout from '../../../assets/hangout.svg';
type Props = {
  userName: string;
  handleCallVisibility: () => void;
  callDuration: string;
};
const ActiveCall: React.FC<Props> = ({
  userName,
  handleCallVisibility,
  callDuration,
}) => {
  return (
    <div className={classNames('call call--active', {})}>
      <div className='call__left'>
        <div className='call-img'></div>
        <div className='call__text'>
          <h1 className='call__text-title'>{userName}</h1>
          <div className='call__text-duration'>
            <img src={redDialIcon} alt={redDialIcon} />

            <p className='call__text-active'>{callDuration}</p>
          </div>
        </div>
      </div>
      <div className='call__buttons'>
        <button type='button' className='call__button--incoming'>
          <img src={mute} alt={mute} />

          <p className='call__buttons-text'>Mute</p>
        </button>

        <button
          type='reset'
          onClick={handleCallVisibility}
          className='call__button--hang-out'
        >
          <img src={hangout} alt={hangout} />

          <p className='call__buttons-text'>End</p>
        </button>
      </div>
    </div>
  );
};

export default ActiveCall;
