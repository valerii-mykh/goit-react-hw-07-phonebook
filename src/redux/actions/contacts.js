import {
  ADD_CONTACTS,
  DELETE_CONTACTS,
  FILTER_CONTACTS,
} from 'redux/types/index';

export const addContacts = (name, phone) => ({
  type: ADD_CONTACTS,
  payload: name,
  phone,
});

export const deleteContacts = id => ({
  type: DELETE_CONTACTS,
  payload: id,
});

export const filterContacts = value => ({
  type: FILTER_CONTACTS,
  payload: value,
});
