import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/contactsSlice";

import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
