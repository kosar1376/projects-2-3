import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";


const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <Link to={'/'}>
          <i className="fa fa-fw fa-home"></i> Home
        </Link>
        <Link to={'/login'}>
          <i className="fa fa-fw fa-user"></i> Log in
        </Link>
        <Link to={'/products'}>
          <i className="fa fa-fw fas fa-cart-plus"></i> Shopping
         
        </Link>
        <Link to={'/services'}>
          <i className="fa fa-fw fa-wrench"></i> Services
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
