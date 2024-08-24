import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addContact } from "../../redux/contacts/operations";
import styles from "./ContactForm.module.css";
import toast from "react-hot-toast";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values))
      .then(() => {
        toast.success("Contact added successfully!");
        resetForm();
      })
      .catch((error) => {
        toast.error("Failed to add contact. Please try again.");
      });
  };

  return (
    <div className={styles.formContainer}>
      <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
        <Form>
          <label className={styles.label}>
            <span>Name</span>
            <Field
              className={styles.input}
              name="name"
              placeholder="Name Contact"
            />
            <ErrorMessage name="name" component="div" />
          </label>

          <label className={styles.label}>
            <span>Number</span>
            <Field
              className={styles.input}
              name="number"
              placeholder="Number Contact"
            />
            <ErrorMessage name="number" component="div" />
          </label>

          <button className={styles.submitButton} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
