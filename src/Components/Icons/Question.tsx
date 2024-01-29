import { Link } from "react-router-dom";

const QuestionIcon = () => {
  return (
    <Link to={"/?"}>
      <div className="welcome-question">?</div>
    </Link>

  );
};

export default QuestionIcon;