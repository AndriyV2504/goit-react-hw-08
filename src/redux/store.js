import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contacts/contactsSlice";
import filtersSlice from "./contacts/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filtersSlice,
  },
});
