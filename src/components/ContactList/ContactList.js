import { ContactCard } from 'components/ContactCard/ContactCard';
import React from 'react';
import { List, ListItem } from './ContactList.Style';
import { useSelector } from 'react-redux';

export const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(state => state.account)
  console.log(contacts)
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactCard contact={contact} onDeleteContact={onDeleteContact} />
        </ListItem>
      ))}
    </List>
  );
};
