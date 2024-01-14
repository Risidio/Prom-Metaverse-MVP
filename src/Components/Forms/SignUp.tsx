import { Link } from "react-router-dom";
import RedButton from "../Buttons/RedButton";
import TextInput from "../Inputs/TextInput";


export const Form = () => {
  return (
    <form action="#" method="get" className="form">

      <TextInput name="email" type="email" label="E-mail"
        className="form-input--1" />

      <p className="form-notification">PROM will never send you any email except for the account creation validation.</p>

      <TextInput name="password" type="password" label="Password"
        className="form-input--2" />


      <TextInput name="password" type="password" label="Confirm password"
        className="form-input--3" />

      <button type="submit" className="form-button">

        <RedButton pathLink="/character-creation" 
        text="Create an account"
        className="button--form"></RedButton>
        <Link to="/" className="welcome__message-link">
          Already have an account ?
        </Link>

      </button>


    </form>
  );
}