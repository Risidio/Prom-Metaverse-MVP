import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import AccountCreation from "./Pages/AccountCreation";
import './App.scss';
import CharacterCreation from "./Pages/CharacterCreation";
import OnBoarding from "./Pages/Onboarding";


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
            element={(
              <AccountCreation />
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
              (<OnBoarding/>)
            }
          />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
