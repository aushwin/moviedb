import React from "react";

const NavBar = ({ setInputValue, inputValue, search }) => {
  return (
    <div className="flex p-8 justify-between items-center">
      <span>Mov Db</span>
      <input
        className="outline-none border-none bg-none bg-dark-grey"
        type="text"
        placeholder="Search..."
        onKeyPress={search}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </div>
  );
};

export default NavBar;
