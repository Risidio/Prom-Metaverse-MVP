
import TextInput from '../Inputs/TextInput';
import SelectInput from '../Inputs/SelectInput';
import avatar from '/Users/nataliabatukova/Prom-Metaverse-MVP/src/assets/avatar.png';
import RedButton from '../Buttons/RedButton';
import ButtonInput from '../Inputs/ButtonInput';
import TransparentButton from '../Buttons/TransparentButton';


const ProfileForm = () => {

  const skinColorArray = [
    // '#FFEBC2',
    // '#FFEBC2',
    // '#FFEBC2',
    // '#F66744',
    // '#734106',
    // '#543507',
    // '#734106',
    // '#301506',
    // '#000',

    'bg-yellow-200',
    'bg-yellow-200',
    'bg-yellow-200',
    'bg-orange-500',
    'bg-brown-800',
    'bg-brown-600',
    'bg-orange-500',
    'bg-brown-900',
    'bg-black',
    ]

  return (
    <form className="form__character">
      <div className='form__left-side'>
        <TextInput
          label="Your Name in the Metaverse"
          type="text"
          name="name"
          className="form-input--meta" />
        <TextInput
          label="Your Pronouns"
          type="text"
          name="gender"
          className="form-input--meta" />

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
          className="form-input"
          label="You want to use prom as a :"
          classNameLabel='form-title--cinema' />
      </div>

      <div className='form__center-side'>
        <img src={avatar} alt="avatar"
          className="form__character" />

        <TransparentButton
          type='submit'
          className='form__center-side-button'
          text={'Random look'}></TransparentButton>

      </div>


      <div className='form__right-side'>

        <div className='form__right-side-colors'>
          <h1 className='form-title'>Skin</h1>
          <div className='form__right-side-colors-container'>

            {skinColorArray.map((skinColor)=> {
              return (
                <input type='button'
                className={`form-input--color 
                ${skinColor}
                `}></input>
              )
            })}

            {/* <input type="button" className='form-input--color
            bg-[#000]'
            value={ '#000'}
            />
 */}
            {/* <input type="button" className='form-input--color'
            />
            <input type="button" className='form-input--color'
            />
            <input type="button" className='form-input--color'
            />
            <input type="button" className='form-input--color'
            />
            <input type="button" className='form-input--color'
            />
            <input type="button" className='form-input--color'
            />
            <input type="button" className='form-input--color'
            />
            <input type="button" className='form-input--color'
            />
            <input type="button" className='form-input--color'
            /> */}

          </div>
        </div>

        <div className='form__right-side-hair'>
          <h1 className='form-title'>Hair</h1>
          <input type="button" name="hair-button" id=""
            value={'Long'}
            className='form-input--button' />

          <div className='form__right-side-colors-container
          form__right-side-colors-container--hair'>
            <input type="button" className='form-input--color'
            // value="#ff0000"
            />
            <input type="button" className='form-input--color'
            // value="#ff0000"
            />
            <input type="button" className='form-input--color'
            // value="#ff0000"
            />
            <input type="button" className='form-input--color'
            // value="#ff0000"
            />
            <input type="button" className='form-input--color'
            // value="#ff0000"
            />
            <input type="button" className='form-input--color'
            // value="#ff0000"
            />
            <input type="button" className='form-input--color'
            // value="#ff0000"
            />
            <input type="button" className='form-input--color'
            // value="#ff0000"
            />
            <input type="button" className='form-input--color'
            // value="#ff0000"
            />
            <input type="button" className='form-input--color'
            // value="#ff0000"
            />

          </div>
        </div>

        <div className='form__right-side-top'>
          <h1 className='form-title'>Top</h1>
          <input type="button" name="hair-button" id=""
            value={'Item Name'}
            className='form-input--button' />
        </div>

        <div className='form__right-side-top'>
          <h1 className='form-title'>Bottom</h1>
          <input type="button" name="hair-button" id=""
            value={'Item Name'}
            className='form-input--button' />
        </div>

        <div className='form__right-side-top'>
          <h1 className='form-title'>Top</h1>
          <input type="button" name="hair-button" id=""
            value={'Item Name'}
            className='form-input--button' />
        </div>

        <div className='form__right-side-top'>
          <h1 className='form-title'>Accessory</h1>
          <input type="button" name="hair-button" id=""
            value={'Item Name'}
            className='form-input--button' />
        </div>

        <RedButton text='Create my character' type='submit'
          className='button--red'></RedButton>




      </div>


    </form>
  )
}

export default ProfileForm