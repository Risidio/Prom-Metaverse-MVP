
import Connect from "../Layouts/Wallet/ConnectToWallet"
import SignupForm from "../Components/Forms/SignUp"
import QuestionIcon from "../Components/Icons/Question"


const AccountCreation = () => {
  return (
    <main>
    <div className="welcome-background">

      <div className="logo"></div>
      <QuestionIcon></QuestionIcon>

      <div className="welcome__message welcome__message--form">
        <div className="welcome__message-container--form">
          <h1 className="welcome__message-title">
            Create your account
          </h1>
          <SignupForm />

          <Connect text="Log in with wallet"></Connect>

        </div>
      </div>
    </div>
    </main>
  )
}

export default AccountCreation