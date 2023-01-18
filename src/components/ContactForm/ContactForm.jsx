import {
  useCreateContactsMutation,
  useFetchContactsQuery,
} from 'redux/slices/contacts';
import React, { useState } from 'react';
import s from 'components/ContactForm/ContactForm.module.css';

export default function ContactForm() {
  const { data } = useFetchContactsQuery();
  const [createContacts] = useCreateContactsMutation();

  const [phone, setNumber] = useState('');
  const [name, setName] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (data.some(data => data.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      createContacts({ name, phone });
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <h2>Phone</h2>
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={phone}
          onChange={handleInputChange}
        />
      </div>
      <button className={s.btn}>Add contact</button>
    </form>
  );
}
