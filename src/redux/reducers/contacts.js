import {
  ADD_CONTACTS,
  DELETE_CONTACTS,
  FILTER_CONTACTS,
} from 'redux/types/index';
import contactsApi from '../slices/contacts';

const contacts = [];

const contactsStorage = JSON.parse(contactsApi.getItem('contacts'));

export const contactsReducer = (
  state = contactsStorage ?? contacts,
  action
) => {
  switch (action.type) {
    case ADD_CONTACTS:
      contactsApi.setItem(
        'contacts',
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    case DELETE_CONTACTS:
      const contact = state.filter(contact => contact.id !== action.payload);
      contactsApi.setItem('contacts', JSON.stringify(contact));
      return contact;
    default:
      return state;
  }
};

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case FILTER_CONTACTS:
      return action.payload;
    default:
      return state;
  }
};
