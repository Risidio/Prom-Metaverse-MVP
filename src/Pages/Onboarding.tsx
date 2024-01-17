import Navbar from "../Layouts/NavBar";

const OnBoarding = () => {
  return (
    <div className="onboarding">
            <div className="logo"></div>

      <Navbar userName="userName"
        level={1}></Navbar>

    </div>
  );
}

export default OnBoarding;