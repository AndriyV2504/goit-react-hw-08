import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            name="name"
            placeholder="Enter your name"
            className={styles.inputField}
          />
          <Field
            name="email"
            placeholder="Enter your email"
            className={styles.inputField}
          />
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
            className={styles.inputField}
          />

          <button type="submit" className={styles.submitButton}>
            Register
          </button>
          <p>
            You already have an account?<Link to="/login">Sign in</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
