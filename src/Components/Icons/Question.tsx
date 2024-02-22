import { useState } from "react";
import { Link } from "react-router-dom";

const QuestionIcon = () => {
  const [onHover, setHover] = useState<boolean>(false);
  return (
    <Link to={"/?"}>
      <div className="question" onMouseEnter={() => setHover(true)} >?</div>
      {onHover &&
      <div className="question-wrapper" onMouseLeave={() => setHover(false)}>
        <div className="question-heading-container">
          <h2 className="heading-container-primary-heading">You’re on the PROM map</h2>
        </div>
        <div className="question-info">
          <p className="info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>}
    </Link>
  );
};
export default QuestionIcon;