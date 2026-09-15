import React from "react";
import { NavLink } from "react-router-dom";

const Orders = () => {
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <NavLink to={"/"} className="btn">
          Get started
        </NavLink>
      </div>
    </div>
  );
};

export default Orders;