import { useDispatch } from "react-redux";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => dispatch()}>Delete</button>
    </div>
  );
};

export default Contact;
