import './App.css';
import Contacts from './contacts.json';
import React, { useState } from 'react';

function App() {
  const [contactsState, updateContactsState] = useState(Contacts.slice(0, 5));

  const handleAddContact = (id) => {
    const randomIndex = Math.floor(Math.random() * Contacts.length);
    const randomContact = contactsState.filter((contact) => {
      return Contacts[randomIndex] && contact.id !== id;
    });
    updateContactsState(randomContact);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={handleAddContact}>Add Random Contact</button>
      <table>
        <tr>
          <th>
            <h1>Picture</h1>
          </th>
          <th>
            <h1>Name</h1>
          </th>
          <th>
            <h1>Popularity</h1>
          </th>
          <th>
            <h1>Won an Oscar</h1>
          </th>
          <th>
            <h1>Won an Emmy</h1>
          </th>
        </tr>
        {contactsState.map((contact, id) => {
          return (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt="contactImg" />
              </td>

              <td>
                <h3>{contact.name}</h3>
              </td>

              <td>
                <h3>{contact.popularity}</h3>
              </td>
              <td>
                <h3>{contact.wonOscar && '🏆'}</h3>
              </td>
              <td>
                <h3>{contact.wonEmmy && '🏆'}</h3>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
