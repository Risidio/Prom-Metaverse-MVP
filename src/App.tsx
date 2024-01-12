import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import AccountCreation from "./Pages/AccountCreation";
import './App.scss';


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

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
