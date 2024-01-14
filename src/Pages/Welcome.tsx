import { Link } from "react-router-dom";
import RedButton from "../Components/Buttons/RedButton";
import WhiteButton from "../Components/Buttons/WhiteButton";
import Connect from "../Components/Wallet/ConnectToWallet";


const Welcome = () => {
  return (
    <div className="welcome-background">
      <div className="logo"></div>
      <div className="welcome__message">
        <div className="welcome__message-container">
          {/* <div className="text-red-500">test</div> */}
          <h1 className="welcome__message-title">Welcome to Prom</h1>

          <p className="welcome__message-description">
            (A small introduction about prom) Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation.
          </p>

          <RedButton pathLink="/account"
          text="Create an account"></RedButton>

          <Link to="/" className="welcome__message-link">
            Visit as a guest
          </Link>

          <WhiteButton pathLink="'/account'"
          text="Sign in"></WhiteButton>
          <Connect></Connect>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
