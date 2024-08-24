import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
        <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
