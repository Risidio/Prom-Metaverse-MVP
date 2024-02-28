import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import AccountCreation from "./Pages/AccountCreation";
import './App.scss';
import SignIn from "./Pages/SignIn";
import 'react-toastify/dist/ReactToastify.css';
import CharacterCreation from "./Pages/ChatacterCreation";
import OnBoarding from "./Pages/Onboarding";
import InvalidWallet from "./Layouts/Wallet/InvalidWallet";
import ScriptPage from "./Pages/ScriptPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";


function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route
            path="/"
            element={(
              <Welcome />
            )}
          />

          <Route
            path="/account"
            element={<AccountCreation />} />


          <Route
            path="invalid-wallet"
            element={<InvalidWallet />}
          />


          <Route
            path="/signin"
            element={(
              <SignIn />
            )}
          />

          <Route
            path="/character-creation"
            element={(
              <CharacterCreation />
            )}
          />

          <Route
            path="/onboarding"
            element={
              (<OnBoarding />)
            }
          />

          <Route
            path="/script"
            element={
              (<ScriptPage></ScriptPage>)
            }
          />

          <Route
            path="/forgot-password"
            element={
              (<ForgotPasswordPage />)
            }
          />

          <Route
            path="/reset-password"
            element={
              (<ResetPasswordPage />)
            }
          />




        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
