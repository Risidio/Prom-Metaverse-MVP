import { NavLink } from "react-router-dom";
import WhiteButton from "../../../Components/Buttons/WhiteButton";
import TextInput from "../../../Components/Inputs/TextInput";
import { useState } from "react";


const ForgotPassword = () => {

  const [emailInput, setEmaiInput] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmaiInput(e.target.value);
  }
  return (
    <section className="password">
      <h1 className="password-title">
        forgot the password
      </h1>

      <p className="password-message">
        Enter your e-mail and we’ll send you a link to reset your password
      </p>

      <form className="password__form">
        <TextInput
          type="text"
          name={"emailChange"}
          label={"E-mail"}
          value={emailInput}
          onChange={handleEmailChange}
          className="password__form-input mb-20"
        />

        <NavLink to={'/reset-password'}>
          <WhiteButton text="Submit"
          className="password__form-button"
          />
        </NavLink>

        <NavLink to={'/signin'} className="password-link">
          Back to login
        </NavLink>



      </form>


    </section>
  )
}

export default ForgotPassword;