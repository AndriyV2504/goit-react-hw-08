import { useDispatch } from "react-redux";
import styles from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.contact}>
      <p>
        {name}: {number}
      </p>
      <button
        className={styles.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
