import SigninForm from "../Components/Forms/Login"
import Connect from "../Layouts/Wallet/ConnectToWallet"
import QuestionIcon from "../Components/Icons/Question"



const SignIn = () => {
  return (
    <main>
    <div className="welcome-background">

      <div className="logo"></div>
      <QuestionIcon></QuestionIcon>
      <div className="welcome__message">
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