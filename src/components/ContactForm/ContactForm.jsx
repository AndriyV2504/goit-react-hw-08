import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <div>
      <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Name</span>
            <Field name="name" />
            <ErrorMessage name="name" component="div" />
          </label>

          <label>
            <span>Number</span>
            <Field name="number" />
            <ErrorMessage name="number" component="div" />
          </label>

          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
