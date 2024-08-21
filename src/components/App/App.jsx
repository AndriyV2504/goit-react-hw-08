import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage ";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import NotFound from "../../pages/NotFound/NotFound";
import { fetchContacts } from "../../redux/contacts/operations";
import { refreshUser } from "../../redux/auth/operations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>PHONEBOOK📋</h1>
      </header>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
