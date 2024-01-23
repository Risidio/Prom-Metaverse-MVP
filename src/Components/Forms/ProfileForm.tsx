
import TextInput from '../Inputs/TextInput';
import SelectInput from '../Inputs/SelectInput';
import avatar from '/Users/nataliabatukova/Prom-Metaverse-MVP/src/assets/avatar.png';
import RedButton from '../Buttons/RedButton';


const ProfileForm = () => {
  return (
    <form className="form form__character">
      <div className='form__left-side'>
        <TextInput
          label="Your Name in the Metaverse"
          type="text"
          name="name"
          className="form-input--1" />
        <TextInput
          label="Your Pronouns"
          type="text"
          name="gender"
          className="form-input--1" />

        <div className='form__left-side-industry'>
          <h1 className='form-title'>
            Are you working in the cinema industry?
          </h1>

          <div className='form__left-side-industry-buttons'>
            <input type="button"
              name='yes'
              value={'yes'}
              className='form__left-side-industry-button form__left-side-industry-button--active' />

            <input type="button"
              name='no'
              value={'no'}
              className='form__left-side-industry-button' />

          </div>
        </div>

        <SelectInput
          className="form-input"
          label="You want to use prom as a :" />
      </div>

      <img src={avatar} alt="avatar"
        className="character-avatar" />


      <div className='form__right-side'>

        <div className='form__right-side-colors'>
          <h1 className='form-title'>Skin</h1>
          <div className='form__right-side-colors-container'>
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