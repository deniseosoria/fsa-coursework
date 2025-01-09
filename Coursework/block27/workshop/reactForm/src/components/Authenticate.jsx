import React from "react";
import { useState, useEffect } from "react";

const Authenticate = ({token}) => {
  const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null)

  async function handleClick(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log(result);

      if (result.error) {
        throw new Error(result.error.message); // Use result.error.message
      }

      console.log("successful:", result);
      setSuccessMessage(result.message);

    } catch (error) {
      console.error("failed:", error);
      setError(error.message); // Update the error state
    }
  }

  return (
    <>
      <div>
        <h2>Authenticate</h2>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error */}
        <button onClick={handleClick}>Authenticate Token!</button>
      </div>
    </>
  );
};

export default Authenticate;
