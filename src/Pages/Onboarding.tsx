import QuestionIcon from "../Components/Icons/Question";
import Navbar from "../Layouts/NavBar";
import OnBoardingFirst from "../Layouts/Popup/OnboardingPopup/OnboardingFirst";

const OnBoarding = () => {

  const titleArray = [
    'Hi {Username}',
    'Your Profile',
    'Tools',
    'Screenwriter building',
  ];

  const textArray = [
    'My name is Alex, and I’m here to help you with your journey in the people’s republic of movies. Let’s create the future of movie together.',
    `You will find your profile here, you can edit your information and keep track of your level. You earn experience every time you take action to grow PROM, and when you have enough experience, you gain a level and reward to thank you for your contribution.`,
    'Here you’ll find useful tools at your disposal to travel faster, contact partners or look at your work!',
    'In this first version, PROM focuses on tools to help screenwriters. When you are ready, you can click on the building to enter inside. '
  ];

  return (
    <main>
      <div className="onboarding">
        <div className="logo"></div>
        <QuestionIcon></QuestionIcon>

        <OnBoardingFirst
          textArray={textArray}
          titleArray={titleArray}></OnBoardingFirst>
        <Navbar userName="userName"
          level={1}></Navbar>

      </div>
    </main>
  );
}

export default OnBoarding;