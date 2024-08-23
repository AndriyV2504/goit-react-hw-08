import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactsPage;
