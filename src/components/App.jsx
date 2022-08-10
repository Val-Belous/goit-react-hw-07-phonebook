import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import Form from './Form/Form';
import { useSelector } from 'react-redux';

export const App = () => {
  const loading = useSelector(state => state.contacts.pending);

  return (
    <>
      <div className="container">
        <h1 className="mainText">Phonebook</h1>
        <Form />
        <h2 className="mainText">Contacts</h2>
        <Filter />
        <ContactList />
        {loading && <h2>loading...</h2>}
      </div>
    </>
  );
};