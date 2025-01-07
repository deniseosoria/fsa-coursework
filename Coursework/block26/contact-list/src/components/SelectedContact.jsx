import { useState, useEffect } from "react";
import SelectedContactRow from "./SelectedContactRow";

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, [selectedContactId]);

  console.log("Contact: ", contact);

  return (
    <div>
      <p>Selected Contact ID: {selectedContactId}</p>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Address</td>
            <td>Company</td>
            <td>Website</td>
          </tr>
        </thead>
        <tbody>
          {contact ? (
            <SelectedContactRow contact={contact} />
          ) : (
            <tr>
              <td colSpan="6">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={() => setSelectedContactId(null)}>Deselect</button>
    </div>
  );
}

export default SelectedContact;
