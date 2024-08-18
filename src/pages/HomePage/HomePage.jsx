import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Our Website!</h1>
      <p className={styles.text}>
        We're glad to have you here. Explore our site and discover everything we
        have to offer.
      </p>
    </div>
  );
};

export default HomePage;
