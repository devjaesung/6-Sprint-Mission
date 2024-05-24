import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Header() {
  const getNavStyle = ({ isActive }) => {
    return isActive
      ? "text-lg text-primaryColor mr-4 font-bold"
      : "text-lg text-coolGray600 mr-4 font-bold";
  };

  return (
    <header className="flex justify-between items-center px-20 py-2 gap-10 border-b-2 bg-white">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-32 h-12" />
      </Link>
      <div className="grow">
        <NavLink to="/community" className={getNavStyle}>
          자유게시판
        </NavLink>
        <NavLink to="/items" className={getNavStyle}>
          중고마켓
        </NavLink>
      </div>
      <Link
        to="/login"
        className="bg-primaryColor hover:bg-blue-400 px-4 py-3 text-white rounded-lg"
      >
        로그인
      </Link>
    </header>
  );
}
