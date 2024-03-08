import React, { useEffect, useState } from "react";
import img4 from "../../Images/logo5.svg";
import img2 from "../../Images/icon-hamburger.svg";
import { jwtDecode } from "jwt-decode";
import "../Dashboard/dashboard.css";
import { MdDashboard } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";
import { format } from "date-fns";

const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (error) {
   console.log(error);
  }
};


const Dashbboard = () => {
    // const currentDate = new Date();
    // const formattedDate = format(currentDate, "MMMM dd, yyyy");

 
  const [userData, setUserData] = useState(null);
  const [stats, setStats] = useState(null);
  const [upcoming, setupcoming] = useState(null);
    const [Open, setOpen] = useState(false);

const navigate = useNavigate();

     
      const Menu = () => {
        setOpen(!Open);
      };

useEffect(()=>{


  if (!localStorage.getItem("token")) {
    navigate("/login");
  }
 

},[])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const decodedToken = decodeToken(token);
        const userId = decodedToken.id;

        const response = await fetch(
          `https://nexus-backend-mhoe.onrender.com/api/v1/patient/${userId}`
        );

        if (response.ok) {
          const userData = await response.json();
          console.log(userData);
          setUserData(userData);
        } else {
          throw new Error("Failed to fetch user data");
        }

        const response2 = await fetch(
          ` https://nexus-backend-mhoe.onrender.com/api/v1/appointments/info/${userId}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        if (response2.ok) {
          const stats = await response2.json();
          console.log(stats);
          setStats(stats);
        } else {
          throw new Error("Failed to fetch user data");
        }

        const response3 = await fetch(
          `  https://nexus-backend-mhoe.onrender.com/api/v1/appointments/upcoming/${userId}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        if (response3.ok) {
          const upcoming = await response3.json();
          console.log(upcoming);
          setupcoming(upcoming);
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const formattedDateOfBirth = userData
    ? format(new Date(userData.data.dateOfBirth), "dd/MMM/yyyy")
    : "";


  return (
    <div>
      <nav className="navbar2">
        <div style={{ display: "flex" }}>
          <img src={img4} alt="logo " />
          <p
            className=""
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

        <div className="nav_hamburger">
          <img className="menu-button" onClick={Menu} src={img2} alt="logo " />
          {Open && (
            <div className="dropdown-menu">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  backgroundColor: "rgb(237, 208, 208)",
                  paddingBottom: "18px",

                  marginTop: "30px",
                }}
              >
                {" "}
                <p
                  style={{
                    paddingTop: "7px",
                    paddingLeft: "75px",
                    fontSize: "18px",
                    color: "red",
                    // marginTop:"10px",
                    // zIndex: "-1",
                    // position: "absolute",
                  }}
                >
                  Dashboard
                </p>
               
                {/* <MdDashboard paddingTop={"50px"}></MdDashboard> */}
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="con">
        <div className="left">
          <div style={{ display: "flex" }}>
            <img style={{ paddingLeft: "20px" }} src={img4} alt="logo " />
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
          <div
            style={{
              width: "100%",
              display: "flex",
              backgroundColor: "rgb(237, 208, 208)",
              paddingBottom: "18px",

              marginTop: "30px",
            }}
          >
            {" "}
            <p
              style={{
                paddingTop: "7px",
                paddingLeft: "75px",
                fontSize: "18px",
                color: "red",
                // marginTop:"10px",
                // zIndex: "-1",
                // position: "absolute",
              }}
            >
              Dashboard
            </p>
            {/* <MdDashboard paddingTop={"50px"}></MdDashboard> */}
          </div>
        </div>
        <div
          className="highlight"
          style={{
            width: "500px",
            // display: "flex",
            backgroundColor: "red",
            position: "absolute",
            marginTop: "137px",

            width: "3px",
            marginLeft: "222px",
            zIndex: "1",
            paddingBottom: "50px",
          }}
        ></div>
        <div className="middle">
          <p
            style={{
              paddingTop: "50px",
              paddingLeft: "50px",
              fontSize: "26px",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Dashboard
          </p>
          <div className="appoint">
            <div className="box1">
              <p
                style={{
                  paddingLeft: "10px",
                  paddingTop: "20px",
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "gray",
                }}
              >
                Total Appointments
              </p>

              {stats ? (
                <div style={{ paddingLeft: "10px" }}>
                  <p
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    {stats.data.totalAppointments}
                  </p>
                  {/* Add other data fields as needed */}
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <div className="box2">
              <p
                style={{
                  paddingLeft: "10px",
                  paddingTop: "20px",
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "gray",
                }}
              >
                Upcoming Appointments
              </p>
              {/* <p
                
              >
                --
              </p> */}
              {stats ? (
                <div style={{ paddingLeft: "10px" }}>
                  <p
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    {stats.data.upcomingAppointments}
                  </p>
                  {/* Add other data fields as needed */}
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>

            <div className="box3">
              <p
                style={{
                  paddingLeft: "10px",
                  paddingTop: "20px",
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "gray",
                }}
              >
                Cancelled Appointments
              </p>
              <p>
                {stats ? (
                  <div style={{ paddingLeft: "10px" }}>
                    <p
                      style={{
                        fontSize: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      {stats.data.cancelledAppointments}
                    </p>
                    {/* Add other data fields as needed */}
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
              </p>
            </div>
          </div>
          <div className="box4">
            {" "}
            <div class="nav_body">
              <p className="text5">Upcoming Appointments</p>

              <p className="text6">Show All</p>
            </div>
            <p className="text7">No upcoming Appointments</p>
          </div>
          <div className="extra"></div>
        </div>
        <div className="right">
          {userData ? (
            <div style={{ paddingLeft: "60px", paddingTop: "50px" }}>
              <img
                style={{ borderRadius: "50%", width: "100px", height: "100px" }}
                src={userData.data.profilePicture}
              ></img>
            </div>
          ) : (
            <p>Loading...</p>
          )}

          <div style={{ display: "flex" }}>
            {userData ? (
              <div
                style={{
                  paddingLeft: "40px",
                  fontWeight: "bold",
                  display: "flex",
                }}
              >
                <p>{userData.data.firstName}</p>
                <p style={{ paddingLeft: "5px" }}>{userData.data.lastName}</p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>

          <div className="nav_body2">
            <div style={{ backgroundColor: "white" }}>
              <p
                style={{
                  backgroundColor: "white",
                  paddingTop: "25px",
                  fontWeight: "bold",
                  paddingLeft: "10px",
                }}
              >
                Personal
              </p>
            </div>

            <div
              style={{
                marginLeft: "90px",
                backgroundColor: "white",
                width: "25px",
                height: "25px",
                backgroundColor: "red",
                borderRadius: "5px",
                marginTop: "25px",
              }}
            ></div>
          </div>
          <div className="nav_body2">
            <div style={{ backgroundColor: "white" }}>
              <p
                style={{
                  backgroundColor: "white",
                  paddingTop: "10px",
                  fontWeight: "bold",
                  paddingLeft: "10px",
                }}
              >
                DOB:
              </p>
            </div>

            {userData ? (
              <div style={{ paddingLeft: "67px", paddingTop: "15px" }}>
                <p style={{ fontSize: "13px" }}> {formattedDateOfBirth} </p>
                {/* Add other data fields as needed */}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="nav_body2">
            <div style={{ backgroundColor: "white" }}>
              <p
                style={{
                  backgroundColor: "white",
                  paddingTop: "10px",
                  fontWeight: "bold",
                  paddingLeft: "10px",
                }}
              >
                Phone:
              </p>
            </div>

            {userData ? (
              <div style={{ paddingLeft: "43px", paddingTop: "14px" }}>
                <p style={{ fontSize: "13px" }}> {userData.data.phoneNumber}</p>
                {/* Add other data fields as needed */}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="nav_body2">
            <div style={{ backgroundColor: "white" }}>
              <p
                style={{
                  backgroundColor: "white",
                  paddingTop: "10px",
                  fontWeight: "bold",
                  paddingLeft: "10px",
                  /*
                  width: '100px',  // Set the width of the container
    whiteSpace: 'nowrap',  // Prevent text from wrapping
    overflow: 'hidden',  // Hide any overflow text
    textOverflow: 'ellipsis'
                  */
                }}
              >
                Address:
              </p>
            </div>

            {userData ? (
              <div
                style={{
                  paddingLeft: "33px",
                  paddingTop: "14px",
                  width: "120px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: "13px",
                }}
              >
                {userData.data.address}
                {/* Add other data fields as needed */}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="nav_body2">
            <div style={{ backgroundColor: "white" }}>
              <p
                style={{
                  backgroundColor: "white",
                  paddingTop: "10px",
                  fontWeight: "bold",
                  paddingLeft: "10px",
                }}
              >
                Email:
              </p>
            </div>

            {userData ? (
              <div
                style={{
                  marginLeft: "40px",
                  paddingTop: "13px",
                  width: "100px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: "13px",
                }}
              >
                {userData.data.email}
                {/* Add other data fields as needed */}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>

          <div className="nav_body2">
            <div style={{ backgroundColor: "white" }}>
              <p
                style={{
                  backgroundColor: "white",
                  paddingTop: "30px",
                  color: "gray",
                  fontSize: "12px",
                  paddingLeft: "10px",
                  fontWeight: "bold",
                }}
              >
                Pending Appointments
              </p>
            </div>

            <p
              style={{
                paddingLeft: "30px",
                paddingTop: "30px",
                color: "red",
                fontSize: "12px",
              }}
            >
              show all
            </p>
            <div style={{ backgroundColor: "white" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbboard;

1