import React, { useState } from "react";

const SignUpForm = ({setToken}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({userName, password}),
        }
      );
      const result = await response.json();
      console.log(result);
      setToken(result.token);

      if (result.error) {
        throw new Error(result.error.message); // Use result.error.message
      }

      console.log("Signup successful:", result);
    } catch (error) {
      console.error("Signup failed:", error);
      setError(error.message); // Update the error state
    }
  }

  return (
    <>
      <div>
        <h2>Sign Up</h2>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error */}

        <form onSubmit={handleSubmit}>
          <label>
            Username:{" "}
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label>
            Password{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
