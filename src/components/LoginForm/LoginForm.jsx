import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { login } from "../../redux/auth/operations";
import UserMenu from "../UserMenu/UserMenu";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  if (isLoggedIn) {
    return <UserMenu />;
  }

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            name="email"
            placeholder="Enter your email"
            className={styles.inputField}
          />
          <Field
            name="password"
            type="password"
            placeholder="Entet your password"
            className={styles.inputField}
          />

          <button type="submit" className={styles.submitButton}>
            Login
          </button>
          <p>
            You don't have an account?<Link to="/register">Sign up</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
