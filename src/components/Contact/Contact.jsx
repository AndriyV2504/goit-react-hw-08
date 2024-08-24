import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Contact.module.css";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import toast from "react-hot-toast";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  const [contactToDelete, setContactToDelete] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedNumber, setUpdatedNumber] = useState(number);

  const handleDeleteClick = (contactId) => {
    setContactToDelete(contactId);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete))
        .then(() => {
          toast.success("Contact deleted successfully!");
          setContactToDelete(null);
          setIsModalOpen(false);
        })
        .catch((error) => {
          toast.error("Failed to delete contact. Please try again.");
        });
    }
  };

  const handleCancelDelete = () => {
    setContactToDelete(null);
    setIsModalOpen(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdatedName(name);
    setUpdatedNumber(number);
  };

  const handleSaveClick = () => {
    dispatch(
      updateContact({
        id,
        updatedData: { name: updatedName, number: updatedNumber },
      })
    )
      .then(() => {
        toast.success("Contact updated successfully!");
        setIsEditing(false);
      })
      .catch((error) => {
        toast.error("Failed to update contact. Please try again.");
      });
  };

  return (
    <div className={styles.contact}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            value={updatedNumber}
            onChange={(e) => setUpdatedNumber(e.target.value)}
            className={styles.input}
          />
          <div className={styles.buttonContainer}>
            <button
              onClick={handleSaveClick}
              className={`${styles.button} ${styles.saveButton}`}
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className={`${styles.button} ${styles.cancelButton}`}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <p>
            {name}: {number}
          </p>
          <div className={styles.buttonContainer}>
            <button
              onClick={handleEditClick}
              className={`${styles.button} ${styles.editButton}`}
            >
              Edit
            </button>
            <button
              className={`${styles.button} ${styles.deleteButton}`}
              onClick={() => dispatch(handleDeleteClick(id))}
            >
              Delete
            </button>
          </div>
        </>
      )}

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
