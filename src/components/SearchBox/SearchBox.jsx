import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  selectNameFilter,
} from "../../redux/contacts/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <p>Find contacts by name</p>
      <input
        className={styles.searchInput}
        type="text"
        value={filter}
        onChange={handleSearch}
        placeholder="Search Contacts..."
      />
    </div>
  );
};

export default SearchBox;
