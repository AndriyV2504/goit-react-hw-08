import axios from "axios";

axios.defaults.baseURL = "https://66b7087f7f7b1c6d8f1ab6e0.mockapi.io/";

export const fetchContacts = () => async () => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
