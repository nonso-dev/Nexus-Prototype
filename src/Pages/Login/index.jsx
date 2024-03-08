import img5 from "../../Images/doctor2.jpeg";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import { useContext, useState, useEffect } from "react";
import img6 from "../../Images/logo5.svg";
import { NexusContext } from "../../Context/NexusContext";

async function loginUser(credentials) {

  return fetch(
    " https://nexus-backend-mhoe.onrender.com/api/v1/patient/login/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }
  ).then((data) => data.json());
}

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { token, setToken } = useContext(NexusContext);
  const [error, setError] = useState("");
  console.log(token);

  const navigate = useNavigate();
 const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);

  const handleSubmit = async (e) => {
    const handleNextStep2 = () => {
      navigate("/dashboard");
    };
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token.token);
    localStorage.setItem("token", token.token);
    console.log("token has being set");
    if (token.status === "OK") {
      handleNextStep2();
    } else  {
      alert("incorrect login details");
      
      navigate("/login");

    }
  };

  

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="sec" style={{ flex: 1 }}>
          <img style={{ height: "678px" }} src={img5}></img>
        </div>
        <div style={{ flex: 1 }}>
          <div>
            <button className="button3" onClick={() => handleNextStep()}>
              Back to home
            </button>
           
          </div>
          <div className="">
            <img
              style={{ paddingTop: "100px", paddingLeft: "180px" }}
              src={img6}
            ></img>
            <div
              style={{
                display: "flex",
                paddingTop: "4px",
                paddingLeft: "100px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              <p className="set" style={{ fontSize: "30px" }}>
                Sign in to
              </p>
              <p
                style={{
                  paddingLeft: "10px",
                  color: "rgb(226, 52, 52)",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                NEXUS
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div style={{ backgroundColor: "white" }} className="form-row">
                <label htmlFor="name" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="e.g. Stephen King"
                  //   value={formData.name} // This binds the input value to the 'email' field in the formData state
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              <div style={{ backgroundColor: "white" }} className="form-row">
                <label htmlFor="email" className="form-label">
                  Password
                </label>
                <input
                  type="text"
                  id="email"
                  className="form-input"
                  placeholder="e.g. stephenking@gmail.com"
                  //   value={formData.email} // This binds the input value to the 'email' field in the formData state
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <p
                className="text1"
                style={{
                  color: "red",
                  paddingTop: "20px",
                  paddingLeft: "20px",
                }}
              >
                Forgot password?
              </p>
              {/* onClick={() => handleNextStep2()} */}
              <button className="nav_button3" type="submit">
                Login
              </button>
            </form>
            <div
              className="text2"
              style={{
                display: "flex",
                paddingTop: "20px",
                paddingLeft: "70px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              <p style={{ fontSize: "15px" }}>Dont have an account?</p>
              <p
                style={{
                  paddingLeft: "10px",
                  color: "rgb(226, 52, 52)",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Get started
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
