import clsx from "clsx";
import { useEffect, useState } from "react";

import headerClasses from "../Header.module.scss";
import classes from "./Seach.module.scss";

const Search = () => {
  const SearchIcon = () => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 19L14.7501 14.7425M17.1053 9.05263C17.1053 11.1883 16.2569 13.2365 14.7467 14.7467C13.2365 16.2569 11.1883 17.1053 9.05263 17.1053C6.91694 17.1053 4.86872 16.2569 3.35856 14.7467C1.8484 13.2365 1 11.1883 1 9.05263C1 6.91694 1.8484 4.86872 3.35856 3.35856C4.86872 1.8484 6.91694 1 9.05263 1C11.1883 1 13.2365 1.8484 14.7467 3.35856C16.2569 4.86872 17.1053 6.91694 17.1053 9.05263Z"
          stroke="#333333"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  const [isExpandSearch, setIsExpandSearch] = useState(false);
  const [searchContent, setSearchContent] = useState("");

  useEffect(() => {
    if (isExpandSearch) {
      focusOnFirstInput();
    }
  }, [isExpandSearch]);

  const focusOnFirstInput = () => {
    document.querySelector(".search-focus").focus();
    console.log(document.querySelector(".search-focus"));
  };

  const toggleSearch = () => {
    setIsExpandSearch(!isExpandSearch);
  };

  const closeSearch = () => {
    if (isExpandSearch) {
      setIsExpandSearch(false);
    }
  };

  const handleSearchContent = (event) => {
    setSearchContent(event.target.value);
  };

  return (
    <div onMouseLeave={() => closeSearch()}>
      <form className={clsx("d-flex", classes.form)}>
        {isExpandSearch && (
          <input
            className={clsx(classes.searchInput, "search-focus")}
            type="text"
            placeholder="Search..."
            value={searchContent}
            onChange={handleSearchContent}
          />
        )}
        <button
          onClick={() => toggleSearch()}
          type={isExpandSearch ? "button" : "submit"}
          className={clsx(
            headerClasses.headerBtn,
            headerClasses.headerBtn__noHover,
            isExpandSearch && classes.searchExpanded,
            !isExpandSearch && classes.searchNoExpanded
          )}
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default Search;
