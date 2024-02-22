import { Link } from "react-router-dom";

const QuestionIcon = () => {
  return (
    <Link to={"/?"}>
      <div className="question">?</div>
    </Link>

  );
};

export default QuestionIcon;