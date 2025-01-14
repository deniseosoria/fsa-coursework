import React, { useState } from "react";
import userIcon from "../assets/icons/icons8-person-48.png";
import passwordIcon from "../assets/icons/icons8-lock-30.png";

const SignUpForm = ({ setToken }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null); // Clear previous errors

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userName, password }),
        }
      );
      const result = await response.json();

      if (result.error) {
        throw new Error(result.error.message); // Handle API errors
      }

      setToken(result.token); // Set the token only if no error
      setSuccessMessage(result.message); // Update success message

      console.log("Signup successful:", result);
    } catch (error) {
      console.error("Signup failed:", error);
      setError(error.message); // Update error state
    }
  }

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error */}
      {successMessage && (
        <p style={{ color: "green" }}>{successMessage}</p> /* Display success */
      )}
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="input-with-icon">
            <label>
              <img src={userIcon} alt="User Icon" className="input-icon" />
              <input
                type="text"
                id="username"
                value={userName}
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
                required
                minLength="4"
                maxLength="8"
              />
            </label>
          </div>
        </div>

        <div className="input-container">
          <div className="input-with-icon">
            <label>
              <img
                src={passwordIcon}
                alt="Lock Icon"
                className="password-icon"
              />
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassWord(e.target.value)}
                required
                minLength="4"
                maxLength="8"
              />
            </label>
          </div>
        </div>

        <button className="form-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
