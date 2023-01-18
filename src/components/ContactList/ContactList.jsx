import {
  useFetchContactsQuery,
  useDeleteContactsMutation,
} from 'redux/slices/contacts';
import { useSelector } from 'react-redux';
import filterValue from 'redux/selectors/contacts-selectors';

import s from 'components/ContactList/ContactList.module.css';

const filtersContacts = (contacts, filter) => {
  if (filter === '') {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default function ContactList() {
  const { data, isFetching, isError, isSuccess } = useFetchContactsQuery();
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactsMutation();

  const filter = useSelector(filterValue);
  const contactsList = filtersContacts(data, filter);

  return (
    <ol className={s.list}>
      {isFetching && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {isSuccess &&
        contactsList.map(el => (
          <li key={el.id}>
            <p className={s.posBtn}>
              <span className={s.text}>
                {el.name}: {el.phone}
              </span>
              <button
                type="button"
                onClick={() => deleteContacts(el.id)}
                className={s.btn}
              >
                {isDeleting ? `Delete...` : `Delete`}
              </button>
            </p>
          </li>
        ))}
    </ol>
  );
}
