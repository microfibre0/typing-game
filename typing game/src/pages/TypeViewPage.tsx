import React from "react";
import TypingView from "../comp/TypingView";
import Keyboard from "../comp/Keyboard";
import SearchBar from "../comp/SearchBar";
import "../css/typeViewPage.css";
function TypeViewPage() {
  return (
    <div className="page">
      <SearchBar placeholder="search" />
      <TypingView snippet="test" />
      <Keyboard />
    </div>
  );
}

export default TypeViewPage;
