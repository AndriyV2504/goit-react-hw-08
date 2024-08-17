import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contacts/contactsSlice";
import filtersSlice from "./contacts/filtersSlice";
import { authReducer } from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filtersSlice,
    auth: authReducer,
  },
});
