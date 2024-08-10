import { useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";

const App = () => {
  useEffect(() => {
    dispatchEvent();
  });

  return (
    <div>
      <h1>PHONEBOOK</h1>
      <ContactForm />
    </div>
  );
};

export default App;
