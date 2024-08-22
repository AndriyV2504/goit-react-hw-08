import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name="name" placeholder="Enter your name" />
          <Field name="email" placeholder="Enter your email" />
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
          />

          <button type="submit">Register</button>
          <p>
            You already have an account?<Link to="/login">Sign in</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
