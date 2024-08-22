import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { login } from "../../redux/auth/operations";
import UserMenu from "../UserMenu/UserMenu";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

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
    <div>
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

export default LoginForm;
