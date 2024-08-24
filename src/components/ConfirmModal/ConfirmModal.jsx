import styles from "./ConfirmModal.module.css";

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <p>{message}</p>
        <div className={styles.buttons}>
          <button onClick={onConfirm} className={styles.confirmButton}>
            Yes
          </button>
          <button onClick={onCancel} className={styles.cancelButton}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
