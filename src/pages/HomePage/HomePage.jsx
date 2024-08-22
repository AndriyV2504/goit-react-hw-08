import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Phonebook App!</h1>
      <p className={styles.text}>
        Manage your contacts easily and efficiently. Add, delete, and search for
        contacts with ease.
      </p>
    </div>
  );
};

export default HomePage;
