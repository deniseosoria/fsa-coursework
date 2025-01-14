import { useState } from "react";
import "./App.css";
import signupImg from "./assets/icons/sign-up.png";

import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <div className="sign-up-container">
        <div className="form">
          <div>
            <SignUpForm token={token} setToken={setToken} />
          </div>
          <div>
            <Authenticate token={token} setToken={setToken} />
          </div>
        </div>
        <div className="form-img-container">
          <img className="form-img"  src={signupImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
