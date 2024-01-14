// import Status from "../Components/Status/Status";
import Navbar from "../Layouts/NavBar";

const OnBoarding = () => {
  // const statusClickHandler = () => {
  //   console.log('click');
  // }
  return (
    <div className="onboarding">
            <div className="logo"></div>

      <Navbar userName="userName"
        level={1}></Navbar>

      {/* <Status statusClick={statusClickHandler}></Status> */}
    </div>
  );
}

export default OnBoarding;