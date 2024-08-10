import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  );
};

export default Contact;
