import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  selectNameFilter,
} from "../../redux/contacts/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handleSearch}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
