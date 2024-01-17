import Navbar from "../Layouts/NavBar";

const OnBoarding = () => {
  return (
    <main>
    <div className="onboarding">
            <div className="logo"></div>

      <Navbar userName="userName"
        level={1}></Navbar>

    </div>
    </main>
  );
}

export default OnBoarding;