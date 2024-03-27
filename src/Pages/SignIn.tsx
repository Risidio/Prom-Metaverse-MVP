import SigninForm from '../Components/Forms/SignInForm';
import Connect from '../Layouts/Wallet/ConnectToWallet';
import QuestionIcon from '../Components/Icons/Question';

const SignIn = () => {
  return (
    <main>
      <div className='welcome-background'>
        <div className='logo'></div>
        <QuestionIcon></QuestionIcon>
        <div className='welcome__message'>
          <div className='welcome__message-container--form'>
            <h1 className='welcome__message-title'>Log in</h1>
            <SigninForm />

            <Connect text='Log in with wallet'></Connect>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
