import RedButton from "../Buttons/RedButton";
import TextInput from "../Inputs/TextInput";


export const Form = () => {
  return (
    <form action="#" method="get" className="form">
     
      <TextInput name="email" type="email"  label="email"/>

      <p className="form-notification">PROM will never send you any email except for the account creation validation.</p>

      <TextInput name="password" type="password" label="password"/>

     
      <TextInput name="password" type="password"label="confirm password"/>

      <button type="submit" className="form-button">

        <RedButton pathLink="#submit"></RedButton>
      </button>


    </form>
  );
}