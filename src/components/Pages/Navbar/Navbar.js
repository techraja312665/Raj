import React, { useState } from "react";
import logo from "../../ASSAT/logo.png";
import Dropdown from 'react-bootstrap/Dropdown';
import './Navbar.css'

const Navbar = () => {
  const [quantity, setquantity] = useState(0);
  return (
    <nav >
      <div className="s1">
      <img src={logo} alt="logo" className="logo" />

      <div className="searchbar">
        <input
          type="text"
          placeholder="Search for products and categories "
          className="search"
        />

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      <div className="right">
        <div className="card">
          <span className="qty">{quantity}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>



        
        
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        
      

        

</div>




      </div>

      <div className="s2">

      <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Fresh Vagitables</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Fresh furits</Dropdown.Item>
        <Dropdown.Item href="#/action-3">House cleaning</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <a>About Us</a>
     <a>Contact Us</a>

     <Dropdown>
     <Dropdown.Toggle variant="" id="dropdown-basic">
       More
     </Dropdown.Toggle>

     <Dropdown.Menu>
       <Dropdown.Item href="#/action-1">Privacy policy</Dropdown.Item>
       <Dropdown.Item href="#/action-2">Fresh furits</Dropdown.Item>
       <Dropdown.Item href="#/action-3">House cleaning</Dropdown.Item>
     </Dropdown.Menu>
   </Dropdown>


      
      
      </div>
      
    
    </nav>
  );
};

export default Navbar;
