import React from "react";
import { Link, Outlet } from "react-router-dom";
import useCarts from "../Hooks/useCarts";

const Dashboard = () => {
  const [cartItems] = useCarts();
  const totalOrders = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex min-h-screen py-20">
      {/* Sidebar */}
      <aside className="w-64 bg-orange-300 p-4">
        <h2 className="text-2xl font-bold mb-6 text-center">BISTRO BOSS</h2>
        <ul className="menu space-y-2">
          <li>
            <Link to="/dashboard/user-home">User Home</Link>
          </li>
          <li>
            <Link to="/dashboard/reservation">Reservation</Link>
          </li>
          <li>
            <Link to="/dashboard/payment-history">Payment History</Link>
          </li>
          <li>
            <Link to="/dashboard/my-cart">My Cart</Link>
          </li>
          <li>
            <Link to="/dashboard/my-booking">My Booking</Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="flex justify-evenly">
          <h2 className="text-3xl font-bold text-center mb-4">
            Total Orders {totalOrders}
          </h2>
          <h2 className="text-3xl font-bold text-center mb-4">
            Price Total {totalPrice}
          </h2>
          <button className="btn btn-primary">Pay</button>
        </div>

        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Dashboard;
