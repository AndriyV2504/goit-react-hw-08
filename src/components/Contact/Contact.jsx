import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  const [contactToDelete, setContactToDelete] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = (contactId) => {
    setContactToDelete(contactId);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete));
      setContactToDelete(null);
      setIsModalOpen(false);
    }
  };

  const handleCancelDelete = () => {
    setContactToDelete(null);
    setIsModalOpen(false);
  };

  return (
    <div className={styles.contact}>
      <p>
        {name}: {number}
      </p>
      <button
        className={styles.button}
        onClick={() => dispatch(handleDeleteClick(id))}
      >
        Delete
      </button>
      {isModalOpen && (
        <ConfirmModal
          message="Are you sure you want to delete this contact?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default Contact;
