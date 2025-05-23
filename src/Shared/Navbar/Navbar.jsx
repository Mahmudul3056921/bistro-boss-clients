import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ProvidersAuth/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCarts from "../../Hooks/useCarts";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [carts] = useCarts();
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <div className="navbar bg-base-100 fixed z-10 max-w-screen-xl mx-auto bg-black bg-opacity-30 text-white">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to={"/order/salad"}>Order</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/menu"}>Menu</Link>
          </li>

          <li>
            <Link to={"/order/dessert"}>Order</Link>
          </li>
          <li>
            <Link to={"/secret"}>Secret</Link>
          </li>

          {user ? (
            <>
              <li>
                <Link to="/dashboard/my-cart">
                  <FaShoppingCart></FaShoppingCart>
                  <div className="badge badge-secondary">{carts.length}</div>
                </Link>
              </li>

              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </div>

              <li>
                <button className="" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              {" "}
              <Link to={"/login"} className="">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
