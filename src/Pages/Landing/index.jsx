import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import img1 from "../../Images/logo.svg";
import img2 from "../../Images/icon-hamburger.svg";
import img3 from "../../Images/doctor.png";
import img4 from "../../Images/logo5.svg";

import "../Landing/landing.css"

const Landing = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    const [Open, setOpen] = useState(false);


    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

        const toggleMenu1 = () => {
          setIsOpen1(!isOpen1);
        };

    const Menu = () => {
      setOpen(!Open);
    }

  const navigate = useNavigate();
  const handleNextStep = () => {
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar">
        <div style={{ display: "flex" }}>
          <img src={img4} alt="logo " />
          <p
            style={{
              paddingTop: "15px",
              paddingLeft: "10px",
              fontWeight: "bold",
              fontSize: "26px",
            }}
          >
            {" "}
            NEXUS
          </p>
        </div>
        <div class="nav_items">
          <p
            style={{
              marginLeft: "80px",
              fontSize: "18px",
              fontWeight: "bold",
              color: "rgb(226, 52, 52)",
            }}
          >
            Home
          </p>
          <p
            style={{
              marginLeft: "80px",
              fontSize: "18px",
              color: "rgb(226, 52, 52)",
              fontWeight: "bold",
            }}
          >
            About Us
          </p>
          <p
            style={{
              marginLeft: "80px",
              fontSize: "18px",
              color: "rgb(226, 52, 52)",
              fontWeight: "bold",
            }}
          >
            Contact
          </p>
        </div>

        <div>
          <button className="button" onClick={toggleMenu}>
            Login
          </button>
          {isOpen && (
            <div
              style={{
                position: "absolute",
                marginLeft: "30px ",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
                padding: "8px",
                height: "100px",
                width: "100px",
              }}
            >
              <ul>
                <p
                  onClick={() => handleNextStep()}
                  style={{ paddingTop: "10px", fontWeight: "bold" }}
                >
                  Patient
                </p>
                <p style={{ paddingTop: "20px", fontWeight: "bold" }}>Doctor</p>
              </ul>
            </div>
          )}

          <button className="nav_button">Sign Up</button>
        </div>
        <div className="nav_hamburger">
          <img className="menu-button" onClick={Menu} src={img2} alt="logo " />
          {Open && (
            <div className="dropdown-menu">
              <ul>
                <p>Home</p>
                <p>About Us</p>
                <p>Contact</p>
                <hr style={{ margin: "10px 20px" }} />
                <button className="button4" onClick={toggleMenu1}>
                  Login
                </button>
                {isOpen1 && (
                  <div
                    style={{
                      position: "absolute",
                      marginLeft: "30px ",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "white",

                      height: "125px",
                      width: "100px",
                    }}
                  >
                    <p onClick={() => handleNextStep()}>Patient</p>
                    <p>Doctors</p>
                  </div>
                )}
                <button className="button5" onClick={toggleMenu1}>
                  Sign Up
                </button>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <div className="section">
        <div className="circle"></div>
        <div className="tex">
          <p>Your Most</p>
          <p>Trusted Health</p>
          <p>Partner Of Life</p>
          <div className="text">
            {[
              "   Start your journey to better health today, with",
              <br />,
              " for personalized healthcare solutions. Your well-",
              " Nexus! A platform to connect doctors and patients  ",
              <br />,
              <br />,
              "",
            ]}
          </div>
          <button className="nav_button2">Book Appointment</button>
        </div>
        <div className="second">
          <div
            style={{
              width: "100px",
              height: "100px",
              position: "absolute",
              zIndex: "-1",
              backgroundColor: "rgb(226, 52, 52)",
            }}
          >
            <div
              style={{
                width: "100px",
                height: "65px",
                position: "absolute",
                zIndex: "-1",
                backgroundColor: "red",
              }}
            ></div>
          </div>
          <img
            style={{
              height: "93%",
              width: "130%",
              padding: "25px",
              paddingLeft: "30px",
              paddingTop: "-0px",
            }}
            src={img3}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Landing;
