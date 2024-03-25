import TextInput from '../Inputs/TextInput';
import SelectInput from '../Inputs/SelectInput';
// import avatar from '/Users/nataliabatukova/Prom-Metaverse-MVP/src/assets/avatar.png';
import RedButton from '../Buttons/RedButton';
import ButtonInput from '../Inputs/ButtonInput';
import TransparentButton from '../Buttons/TransparentButton';
import { useState } from 'react';
import ArrowLeft from '../Buttons/ArrowLeft';
import ArrowRight from '../Buttons/ArrowRight';
import { NavLink } from 'react-router-dom';

const ProfileForm = () => {

  const colorArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];


  const hairLengths = ['Short', 'Medium', 'Long'];
  const TopArray = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  const bottomArray = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  const accessoryArray = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];


  const [selectedHair, setSelectedHair] = useState(hairLengths[0]);
  const [selectedTop, setSelectedTop] = useState(TopArray[0]);
  const [selectedBottom, setSelectedBottom] = useState(bottomArray[0]);
  const [selectedAccessory, setSelectedAccessory] = useState(accessoryArray[0]);


  const handlePrevClickHair = () => {
    const currentIndex = hairLengths.indexOf(selectedHair);
    const newIndex = (currentIndex - 1 + hairLengths.length) % hairLengths.length;
    setSelectedHair(hairLengths[newIndex]);

  };

  const handleNextClickHair = () => {
    const currentIndex = hairLengths.indexOf(selectedHair);
    const newIndex = (currentIndex + 1) % hairLengths.length;
    setSelectedHair(hairLengths[newIndex]);

  };



  const handlePrevClickTop = () => {
    const currentIndex = TopArray.indexOf(selectedTop);
    const newIndex = (currentIndex - 1 + TopArray.length) % TopArray.length;
    setSelectedTop(TopArray[newIndex]);

  };

  const handleNextClickTop = () => {
    const currentIndex = TopArray.indexOf(selectedTop);
    const newIndex = (currentIndex + 1) % TopArray.length;
    setSelectedTop(TopArray[newIndex]);

  };


  const handlePrevClickBottom = () => {
    const currentIndex = bottomArray.indexOf(selectedBottom);
    const newIndex = (currentIndex - 1 + bottomArray.length) % bottomArray.length;
    setSelectedBottom(bottomArray[newIndex]);

  };

  const handleNextClickBottom = () => {
    const currentIndex = bottomArray.indexOf(selectedBottom);
    const newIndex = (currentIndex + 1) % bottomArray.length;
    setSelectedBottom(bottomArray[newIndex]);

  };

  const handlePrevClickAccessory = () => {
    const currentIndex = accessoryArray.indexOf(selectedAccessory);
    const newIndex = (currentIndex - 1 + accessoryArray.length) % accessoryArray.length;
    setSelectedAccessory(accessoryArray[newIndex]);

  };

  const handleNextClickAccessory = () => {
    const currentIndex = accessoryArray.indexOf(selectedAccessory);
    const newIndex = (currentIndex + 1) % accessoryArray.length;
    setSelectedAccessory(accessoryArray[newIndex]);

  };

  return (
    <form className='form__character'>
      <div className='form__left-side'>
        <TextInput
          label='Your Name in the Metaverse'
          type='text'
          name='name'
          className='form-input--meta'
        />
        <TextInput
          label='Your Pronouns'
          type='text'
          name='gender'
          className='form-input--meta'
        />

        <div className='form__left-side-industry'>
          <h1 className='form-title form-title--cinema'>
            Are you working in the cinema industry?
          </h1>

          <div className='form__left-side-industry-buttons'>
            <ButtonInput
              name='yes'
              value='yes'
              className='form__left-side-industry-button 
            form__left-side-industry-button--active'
            />

            <ButtonInput
              name='no'
              value='no'
              className='form__left-side-industry-button'
            />
          </div>
        </div>

        <SelectInput
          className='form-input'
          label='You want to use Prom as a :'
          classNameLabel='form-title--cinema'
          options={[
            'Photographer',
            'Production Artist',
            'Producer',
            'Production Designer',
          ]} />
      </div>

      <div className='form__center-side'>

        <div className='form__center-img'></div>

        <TransparentButton
          type='submit'
          className='form__center-side-button'
          text={'Randomise look'}
        />
      </div>

      <div className='form__right-side'>
        <div className='form__right-side-colors'>
          <h1 className='form-title'>Skin</h1>
          <div className='form__right-side-colors-container'>
            {colorArray.map((skinColor) => {
              return (
                <input
                  type='button'
                  className={`form-input--color
                form-input-skin--${skinColor}
                `}
                ></input>
              );
            })}
          </div>
        </div>

        <div className='form__right-side-hair'>
          <h1 className='form-title'>Hair</h1>

          <div className='form__right-side-buttons'>
            <ArrowLeft handleClick={handlePrevClickHair}></ArrowLeft>
            <input
              type='button'
              name='hair-button'
              id=''
              value={selectedHair}
              className='form-input--button '
            />
            <ArrowRight handleClick={handleNextClickHair}></ArrowRight>
          </div>

          <div
            className='form__right-side-colors-container
          form__right-side-colors-container--hair'
          >
            {colorArray.map((skinColor) => {
              return (
                <input
                  type='button'
                  className={`form-input--color
                form-input-hair--${skinColor}
                `}
                ></input>
              );
            })}
          </div>
        </div>

        <div className='form__right-side-top'>
          <h1 className='form-title'>Top</h1>

          <div className='form__right-side-buttons'>
            <ArrowLeft handleClick={handlePrevClickTop}></ArrowLeft>
            <input
              type='button'
              name='top'
              id=''
              value={selectedTop}
              className='form-input--button '
            />
            <ArrowRight handleClick={handleNextClickTop}></ArrowRight>
          </div>

        </div>

        <div className='form__right-side-top'>
          <h1 className='form-title'>Bottom</h1>

          <div className='form__right-side-buttons'>
            <ArrowLeft handleClick={handlePrevClickBottom}></ArrowLeft>
            <input
              type='button'
              name='bottom'
              id=''
              value={selectedBottom}
              className='form-input--button '
            />
            <ArrowRight handleClick={handleNextClickBottom}></ArrowRight>
          </div>

        </div>


        <div className='form__right-side-top'>
          <h1 className='form-title'>Accessory</h1>
          <div className='form__right-side-buttons'>
            <ArrowLeft handleClick={handlePrevClickAccessory}></ArrowLeft>
            <input
              type='button'
              name='accessory'
              id=''
              value={selectedAccessory}
              className='form-input--button '
            />
            <ArrowRight handleClick={handleNextClickAccessory}></ArrowRight>
          </div>
        </div>

        <div className='form__right-side-red-button'>
          <RedButton
            text='Create my character'
            type='submit'
            className='button--create-character none'
          />
          {/* remove the none classname later in the button above */}


          {/* the button below is temporary for a demonstration */}


          <NavLink to={'/onboarding'}>
            <RedButton
              text='Create my character'
              type='submit'
              className='button--create-character'
            />

          </NavLink>


        </div>

      </div>
    </form>
  );
};

export default ProfileForm;
