import { Link } from "react-router-dom"
import SigninForm from "../Components/Forms/Login"
import Connect from "../Components/Wallet/ConnectToWallet"



const SignIn = () => {
  return (
    <main>
    <div className="welcome-background">

      <div className="welcome-logo"></div>
      <Link to={"?"}>
        <div className="welcome-question">?</div>
      </Link>
      <div className="welcome__message welcome__message--form">
        <div className="welcome__message-container--form">
          <h1 className="welcome__message-title">
            Login into account
          </h1>
          <SigninForm />

          <Connect></Connect>

        </div>
      </div>
    </div>
    </main>
  )
}

export default SignIn