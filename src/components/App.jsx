import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    dispatchEvent();
  });

  return (
    <div>
      <h1>PHONEBOOK</h1>
    </div>
  );
};

export default App;
