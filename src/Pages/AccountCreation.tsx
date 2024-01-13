import { Link } from "react-router-dom"
import { Form } from "../Components/Forms/SignUp"
import Connect from "../Components/Wallet/ConnectToWallet"


const AccountCreation = () => {
  return (
    <div className="welcome-background">

      <div className="welcome-logo"></div>
      <Link to={"?"}>
      <div className="welcome-question">?</div>
      </Link>
      <div className="welcome__message welcome__message--form">
        <div className="welcome__message-container--form">
          <h1 className="welcome__message-title">
            Create your account
          </h1>
<Form></Form>

<Connect></Connect>

        </div>
      </div>
    </div>
  )
}

export default AccountCreation