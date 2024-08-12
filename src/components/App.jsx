import { useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../redux/contacts/contactsSlice";
import { fetchContacts } from "../redux/contactsOps";
import styles from "./App/App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>PHONEBOOK📋</h1>
      </header>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </div>
  );
};

export default App;
