import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name="email" placeholder="Enter your email" />
          <Field
            name="password"
            type="password"
            placeholder="Entet your password"
          />

          <button type="submit">Login</button>
          <p>
            You don't have an account?<Link to="/register">Sign up</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
