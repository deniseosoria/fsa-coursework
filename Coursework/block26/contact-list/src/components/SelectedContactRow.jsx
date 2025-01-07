const SelectedContactRow = ({ contact }) => {
    if (!contact) return null;
  
    // Safely extract and format nested fields
    const address = contact.address
      ? `${contact.address.street}, ${contact.address.suite}, ${contact.address.city}, ${contact.address.zipcode}`
      : "N/A";
    const company = contact.company ? contact.company.name : "N/A";
    const website = contact.website || "N/A";
  
    return (
      <tr>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
        <td>{address}</td>
        <td>{company}</td>
        <td>
          <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </td>
      </tr>
    );
  };
  
  export default SelectedContactRow;
  
