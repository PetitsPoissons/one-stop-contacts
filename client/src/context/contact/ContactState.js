import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
        nameFirst: 'Jill',
        nameLast: 'Johnson',
        nameOther: '',
        emailPrimary: 'jill@gmail.com',
        emailOther: '',
        phoneCell: '111-111-1111',
        phoneOther: '',
        street: '1234 Street A',
        city: 'Los Angeles',
        state: 'California',
        zip: '90039',
        country: 'USA',
        youtubeAccount:
          'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
        youtubeUsername: 'traversymedia',
        type: 'personal',
        note: 'Known each other since 4th grade',
      },
      {
        id: 2,
        nameFirst: 'Sara',
        nameLast: 'Watson',
        emailPrimary: 'sara@gmail.com',
        phoneCell: '222-222-2222',
        website: 'http://www.watson.com',
        githubAccount: 'https://github.com/SaraWatson',
        githubUsername: 'SraWatson',
        linkedinAccount: 'linkedinAccount',
        linkedinUsername: 'linkedinUsername',
        twitterAccount: 'twitterAccount',
        twitterUsername: 'twitterUsername',
        facebookAccount: 'facebookAccount',
        facebookUsername: 'facebookUsername',
        instagramAccount: 'instagramAccount',
        instagramUsername: 'instagramUsername',
        type: 'personal',
      },
      {
        id: 3,
        nameFirst: 'Harry',
        nameLast: 'White',
        nameOther: 'white_harry',
        emailPrimary: 'harry@gmail.com',
        emailOther: 'harry_white@work.com',
        phoneCell: '333-333-3333',
        phoneOther: '332-332-3322',
        organization: 'Company XYZ',
        type: 'professional',
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  // Delete contact
  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };

  // Set current contact
  const setCurrent = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact,
    });
  };

  // Clear current contact
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  // Update contact
  const updateContact = (contact) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    });
  };

  // Filter contacts
  const filterContacts = (text) => {
    dispatch({
      type: FILTER_CONTACTS,
      payload: text,
    });
  };

  // Clear filter
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
