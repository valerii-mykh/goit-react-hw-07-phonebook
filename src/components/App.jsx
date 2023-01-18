import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Wrap } from './App.styled';
//
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectisLoading,
  selectError,
  selectFilteredContacts,
} from '../redux/selectors';
import { fetchContacts, addContact } from '../redux/operations';
import { useEffect } from 'react';
//

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectisLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilteredContacts);

  const newContact = name => {
    contacts.find(
      contact => contact.name.toLowerCase() === name.name.toLowerCase()
    )
      ? alert(`${name.name} is already in contacts`)
      : dispatch(addContact(name));
  };

  const handleSubmit = (values, { resetForm }) => {
    newContact(values);
    resetForm();
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrap>
      <Section title={`Phonebook`}></Section>
      <ContactForm handleSubmit={handleSubmit} />
      <Section title={`Contacts`}>
        <Filter />
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        {contacts.length > 0 && <ContactsList contacts={filter} />}
      </Section>
    </Wrap>
  );
}
