import React from "react";
import logo from '../../../assets/images/Logo.png'
import { Link } from "react-router-dom";

const Header = () => {
    const menuItems = <>
      <li><Link to="/home" >Home</Link></li>
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/order-review">Order Review</Link></li>
      <li><a>Manage Inventory</a></li>
    </>

  return (
    <header>
      <div className="fixed top-0 z-20  navbar justify-between bg-[#1C2B35] text-white shadow-sm lg:py-5 2xl:py-10 lg:px-16 2xl:px-34">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#1C2B35] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
             {menuItems}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
