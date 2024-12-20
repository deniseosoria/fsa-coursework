import "./App.css";

// Import the useState hook from React to manage component state
import { useState } from 'react';
// Import the puppyList array from the data.js file to use in the application
import { puppyList } from './data.js';

function App() {
  // Initialize the state to hold the list of puppies using the imported data
  const [puppies, setPuppies] = useState(puppyList);

  // Initialize the state to hold the ID of the currently selected puppy, default is null
  const [featPupId, setFeatPupId] = useState(null);

  // Find the selected puppy in the puppies array using the ID stored in featPupId
  // This allows us to display detailed information about the selected puppy
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      {/* Page heading */}
      <h1>Puppy List</h1>

      {/* Map over the puppies array to render a list of puppy names */}
      {puppies.map((puppy) => (
        <p 
          key={puppy.id} // Assign a unique key to each element for React's list rendering
          onClick={() => setFeatPupId(puppy.id)} // Set the selected puppy's ID on click
        >
          {puppy.name} {/* Render the name of the puppy */}
        </p>
      ))}

      {/* Conditionally render detailed information about the selected puppy */}
      {featPupId && (
        <div>
          {/* Render the name of the selected puppy */}
          <h2>{featuredPup.name}</h2>
          <ul>
            {/* Render the age of the selected puppy */}
            <li>Age: {featuredPup.age}</li>
            {/* Render the email of the selected puppy */}
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

// Export the App component so it can be rendered in the main application
export default App;
