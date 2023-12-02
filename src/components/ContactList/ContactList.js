import { ContactCard } from 'components/ContactCard/ContactCard';
import React from 'react';
import { List, ListItem } from './ContactList.Style';
import { useSelector } from 'react-redux';

export const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(state => state.account)
  const filterContact = useSelector(state => state.filter.filter.toLowerCase().trim())


 console.log(filterContact)

const newContact = contacts.filter(contact =>
  contact.name.toLowerCase().includes(filterContact.toLowerCase())
);
 
  return (
    <List>
      {newContact.map(contact => (
        <ListItem key={contact.id}>
          <ContactCard contact={contact} onDeleteContact={onDeleteContact} />
        </ListItem>
      ))}
    </List>
  );
};


