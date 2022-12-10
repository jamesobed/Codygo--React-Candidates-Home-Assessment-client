import React from "react";
import { SearchStyles } from "./SearchStyles";
type SearchProps = {
  placeholder: string;
  className: string;
};

const Search: React.FC<SearchProps> = (props) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  // use useEffect for searchterm input change

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  console.log(searchTerm);

  return (
    <SearchStyles>
      <input
        type="text"
        id="search-input"
        placeholder={props.placeholder}
        value={searchTerm}
        onChange={handleChange}
        className={props.className}
      />
    </SearchStyles>
  );
};

export default Search;
