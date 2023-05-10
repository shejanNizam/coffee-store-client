import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center my-4 font-bold">
      <Link to=""> Home </Link>
      <Link to="/addCoffee"> AddCoffee </Link>
    </div>
  );
};

export default Header;
