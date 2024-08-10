import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/contactsSlice";
import { selectNameFilter } from "../../redux/contacts/filtersSlice";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {filterContacts.map((contact) => {
        <li key={contact.id}>
          <Contact data={contact} />
        </li>;
      })}
    </ul>
  );
};

export default ContactList;
