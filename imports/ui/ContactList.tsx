import React from 'react';
import { ContactCollection } from "../api/ContactCollection";
import { useTracker } from 'meteor/react-meteor-data';

export const ContactList = () => {
    const contacts = useTracker(() => {
        return ContactCollection.find({}).fetch();
      });

  ContactCollection.find({}).fetch();
  return (
    <div>
      <h1>Contact List</h1>
      {contacts.map((contact) => (
        <li key={contact.email}>{contact.name}-{contact.email}</li>
      ))}
    </div>
  );
};
