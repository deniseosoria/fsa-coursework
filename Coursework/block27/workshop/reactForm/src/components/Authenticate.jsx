import React, { useState } from "react";

{ /* Authentication is a process used to verify the identity of a user, 
    device, or system before granting access to a resource or service. 
    In the context of web applications or APIs, authentication ensures 
    that only authorized users with valid credentials can access certain 
    functionalities or data 
*/}

const Authenticate = ({ token }) => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  async function handleClick(event) {
    event.preventDefault();
    setError(null); // Reset the error state before the request

    if (!token) {
      setError("Sign up first to get a token!"); // Check if token exists
      return;
    }

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Add token to the headers
          },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Authentication failed"); // Handle API error
      }

      console.log("Authentication successful:", result);
      setSuccessMessage(result.message); // Update success message
    } catch (error) {
      console.error("Authentication failed:", error);
      setError(error.message); // Update the error state
    }
  }

  return (
    <div>
      <h2>Authenticate</h2>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error */}
      {successMessage && (
        <p style={{ color: "green" }}>{successMessage}</p> /* Display success */
      )}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
};

export default Authenticate;
