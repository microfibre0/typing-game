import React from "react";
import "../css/searchBar.css";
interface Props {
  placeholder: string;
}

function SearchBar({ placeholder }: Props) {
  return (
    <div className="searchBar">
      <p className="placeholder">{placeholder}</p>
    </div>
  );
}

export default SearchBar;
