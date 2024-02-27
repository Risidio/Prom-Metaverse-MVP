import { useState } from "react";
import { NavLink } from "react-router-dom";
import WhiteButton from "../../../Components/Buttons/WhiteButton";
import TextInput from "../../../Components/Inputs/TextInput";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  }

  const [confirmPassword, setConfirmPassword] = useState('');

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  }


  return (

    <section className="password">
      <h1 className="password-title">
        reset password
      </h1>

      <form className="password__form">
        <TextInput
          type="password"
          name={"newPassword"}
          label={"New Password"}
          value={newPassword}
          onChange={handleNewPasswordChange}
          className="password__form-input--1 mb-3"
        />

        <TextInput
          type="password"
          name={"confirmPassword"}
          label={"Confirm New Password"}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
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

export default ResetPassword;