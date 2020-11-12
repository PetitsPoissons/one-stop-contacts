import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        firstname: 'Jill',
        lastname: 'Johnson',
        emailPrimary: 'jill@gmail.com',
        phoneCell: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        firstname: 'Sara',
        lastname: 'Watson',
        emailPrimary: 'sara@gmail.com',
        phoneCell: '222-222-2222',
        type: 'personal',
      },
      {
        id: 3,
        firstname: 'Harry',
        lastname: 'White',
        emailPrimary: 'harry@gmail.com',
        phoneCell: '333-333-3333',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
