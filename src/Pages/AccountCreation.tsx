import { Link } from "react-router-dom"

import Connect from "../Components/Wallet/ConnectToWallet"
import SignupForm from "../Components/Forms/SignUp"


const AccountCreation = () => {
  return (
    <main>
    <div className="welcome-background">

      <div className="logo"></div>
      <Link to={"?"}>
        <div className="question">?</div>
      </Link>
      <div className="welcome__message welcome__message--form">
        <div className="welcome__message-container--form">
          <h1 className="welcome__message-title">
            Create your account
          </h1>
          <SignupForm />

          <Connect></Connect>

        </div>
      </div>
    </div>
    </main>
  )
}

export default AccountCreation