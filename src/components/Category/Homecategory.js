import React from "react";
import logo1 from "../ASSAT/1.png";
import logo2 from "../ASSAT/2.png";
import logo3 from "../ASSAT/3.png";
import logo4 from "../ASSAT/Images/4.png"
import './Homecategory.css'

const Homecategory = () => {
  return (
    <div className="homecategories">
      <div className="container">
        <img src={logo1} alt="no " />
        <div className="content">
          <h1>Fresh vagetables at your doorstep</h1>
          <p>Shop more now</p>
        </div>
      </div>
      <div className="container">
        <img src={logo2} alt="no " />
        <div className="content">
          <h1>Fresh vagetables at your doorstep</h1>
          <p>Shop more now</p>
        </div>
      </div>
      <div className="container">
        <img src={logo3} alt="no " />
        <div className="content">
          <h1>Fresh vagetables at your doorstep</h1>
          <p>Shop more now</p>
        </div>
      </div>
      <div className="container">
        <img src={logo4} alt="no " />
        <div className="content">
          <h1>Fresh vagetables at your doorstep</h1>
          <p>Shop more now</p>
        </div>
      </div>
    </div>
  );
};

export default Homecategory;
