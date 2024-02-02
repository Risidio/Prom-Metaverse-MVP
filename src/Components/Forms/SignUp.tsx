import { Link, useNavigate } from "react-router-dom";
import TextInput from "../Inputs/TextInput";
import { ChangeEvent, FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import RedButton from "../Buttons/RedButton";


const SignupForm = () => {

  const navigate = useNavigate()


  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("");


  const handleAccountCreation = async (e: FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const register = { email, password }
    try {
      const response = await fetch("https://9b61-41-66-202-242.ngrok-free.app/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(register),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        toast.success("Registered Successfully");

        // Store the token in local storage
        localStorage.setItem("token", responseData.data.token);

        setTimeout(() => {
          navigate("/character-creation");
        }, 600);
      } else {
        const errorData = await response.json();
        toast.error(`Failed: ${errorData.message}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Failed: ${error.message}`);
      } else {
        toast.error(`Failed: An unexpected error occurred`);
      }
    }
  };
  return (
    <form className="form" onSubmit={handleAccountCreation}>

      <TextInput name="email" type="email" label="E-mail"
        className="form-input--1" value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value)
        }} />

      <p className="form-notification">PROM will never send you any email except for the account creation validation.</p>

      <TextInput name="password" type="password" label="Password"
        className="form-input--2" value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setPassword(e.target.value)
        }} />


      <TextInput name="password" type="password" label="Confirm password"
        className="form-input--3"
        value={confirmPassword}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setConfirmPassword(e.target.value);
        }} />

      {/* <button className="form-button"> */}

      <RedButton type="submit"
      className="mb-2"
      //  className="h-[48px] w-[203px]" 
       text="Create an account"/>


        <Link to="/signin" className="welcome__message-link
        welcome__message-link--create">
          Already have an account ?
        </Link>

      {/* </button> */}
   
      <ToastContainer />
    </form>
  );
}

export default SignupForm;