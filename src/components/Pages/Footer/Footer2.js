import React from "react";
import pay1 from "../../ASSAT/pay.png";
import logo from "../../ASSAT/logo.png";
import logo2 from "../../ASSAT/social.png";
import './Footer2.css'
const Footer2 = () => {
  return (
    <div className="footer">
      <div className="footerin1">
        <div className="f1">
          <img src={logo} alt="logo" className="logo" />

          <p>
            The menu offers a variety of comforting treats, from steaming cups
            of artisanal hot chocolate to flaky pastries and hearty soups.
            There's something for everyone, whether you're craving a decadent
            slice of cake or a healthy salad bursting with fresh ingredients.
          </p>
          <img src={logo2} alt="social" className="social" />
        </div>
        <div className="f2">
          <h1>About Us</h1>
          <p>About us</p>
          <p>Contact Us</p>
          <p>About Team</p>
          <p>Customer Support</p>
        </div>
        <div className="f2">
          <h1>Our Information</h1>
          <p>Privacy policy update</p>
          <p>Tearm & Conditions</p>
          <p>Return Policy</p>
          <p>site map</p>
        </div>
        <div className="f2">
          <h1>Community</h1>
          <p>Announcements</p>
          <p>Discussion board</p>
          <p>Giving Work</p>
          <p>site map</p>
        </div>
        <div className="f2">
          <h1>Subscribe Now</h1>

          <p>
            subsciribe your eamil for newsletter and featursed news based on
            your internet
          </p>

          <div className="inputtext">
            <span className="icon1">

           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
                />
              </svg>

              <input type="text" placeholder="Enter your Email.." />
            </span>



            <span className="icon2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </span>
            
           
          </div>
     

         
        </div>
      </div>

      <div className="footerin2">
        <h2> fitgrocery2346@gamil.com All are reserverd </h2>

        <img src={pay1} alt="noimg" />
      </div>
    </div>
  );
};

export default Footer2;
