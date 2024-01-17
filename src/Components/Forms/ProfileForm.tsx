
import TextInput from '../Inputs/TextInput'
import SelectInput from '../Inputs/SelectInput'

const ProfileForm = () => {
  return (
    <form className="form">
        <TextInput label="Your Name in the Metaverse" type="text" name="name"   className="form-input--1"/>
        <TextInput label="Your Pronouns" type="text" name="gender"   className="form-input--1"/>
        <SelectInput   className="form-input--1" label="You want to use prom as a :"/>
    </form>
  )
}

export default ProfileForm