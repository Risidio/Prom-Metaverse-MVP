import { useState } from "react";
import WhiteButton from "../../../Components/Buttons/WhiteButton";
import TriangleDiv from "../../../Components/TriangleDiv";

type Props = {
  textArray: string[];
  userName?: string,
  titleArray: string[];
}
const OnBoardingFirst: React.FC<Props> = ({
  textArray,
  userName,
  titleArray,
}) => {
  const [onboardingIndex, setOnboardingIndex] = useState<number>(0);

  const [showTriangle, setShowTriangle] = useState(false);

  const handleButtonClick = () => {
    setOnboardingIndex(prevIndex => prevIndex + 1);
    setShowTriangle(true);
    console.log(onboardingIndex);
  };

  const handleSkipClick = () => {
    setOnboardingIndex(4);
  }
  return (

    <article className={`onboarding-message onboarding-message--${onboardingIndex}`}>
      <div className="onboarding-message-img"></div>

      <div className="onboarding-message-container">
        <h1 className="onboarding-message-title">
          {titleArray[onboardingIndex]} {userName}
        </h1>

        <p className="onboarding-message-message">
          {textArray[onboardingIndex]}
        </p>
      </div>


      <div className="onboarding-message__buttons">
        <WhiteButton text="Skip Tutorial"
        onClick={handleSkipClick}
          type="button"></WhiteButton>

        <button type="button"
          className="onboarding-message__buttons-button"
          onClick={handleButtonClick}>
          <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.44012 17.6603L10.6201 9.50033L1.44012 1.34033" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </button>
      </div>

      {showTriangle && <TriangleDiv classNameSecond="triangle-up--travel"></TriangleDiv>}
    </article>
  )
}

export default OnBoardingFirst;