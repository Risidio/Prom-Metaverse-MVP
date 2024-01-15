import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import AccountCreation from "./Pages/AccountCreation";
import './App.scss';
import SignIn from "./Pages/SignIn";
import 'react-toastify/dist/ReactToastify.css';


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
          path="/signin"
          element={(
            <SignIn />
          )}
        />

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
