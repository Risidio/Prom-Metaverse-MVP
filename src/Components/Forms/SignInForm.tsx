import { Link, NavLink, useNavigate } from "react-router-dom";
// import RedButton from "../Buttons/RedButton";
import TextInput from "../Inputs/TextInput";
// import { ChangeEvent, FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import RedButton from "../Buttons/RedButton";
import { useLoginMutation } from "../../store/auth";
import { useFormik } from "formik";
import { LoginValidationSchema } from "../../validations/auth";

const SigninForm = () => {
  const [request, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const { values, errors, isValid, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidationSchema(),
    onSubmit: () => initRequest(),
  });

  const initRequest = () => {
    request(values)
      .unwrap()
      .then((res) => {
        console.log(res.data);
        if (res.code === 200 || res.code === 201) {
          toast.success("Loged in successfully");
          setTimeout(() => {
            navigate("/character-creation");
          }, 2000);
        } else {
          toast.error("Please write right credentials");
        }
      })
      .catch((error: any) => {
        console.group(error);
        toast.error(`Failed: ${error.message}`);
      });
  };

  return (
    <div className="form">
      <TextInput
        name="email"
        type="email"
        label="E-mail"
        className="form-input--3"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <p className="text-red-900">{errors.email}</p>}

      <TextInput
        name="password"
        type="password"
        label="Password"
        className="form-input--4"
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <p className="text-red-900">{errors.password}</p>}

      <NavLink
        to={"/forgot-password"}
        className={
          "block mb-10 text-left underline decoration-solid font-light"
        }
      >
        Forgot password
      </NavLink>

      {/* <NavLink to={"/signin"} className="flex items-center justify-center"> */}
      <div className="flex items-center justify-center">
        <RedButton
          type="submit"
          className="mb-2 none"
          onClick={() => handleSubmit()}
          text={isLoading ? "loading..." : "Log in"}
        />
        <RedButton
          type="submit"
          onClick={() => handleSubmit()}
          className="mb-2"
          text={isLoading ? "loading..." : "Log in"}
        />
      </div>
      {/* </NavLink> */}

      <Link to="/account" className="welcome__message-link">
        No account yet? Create an account
      </Link>

      <ToastContainer />
    </div>
  );
};

export default SigninForm;
