import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import UserLogin from "./authlogin";

const Login = () => {
  const navigate = useNavigate();
  const [formvalue, setFormValue] = useState({
    Email: "",
    Password: "",
  });

  // const handleChange = (event) => {
  //   setFormValue({...formvalue, [event.target.name]: event.target.value})
  // }
  console.log(formvalue.Password);
  const handlelogin = async () => {
    if (!formvalue.Email || !formvalue.Password) {
      alert("Enter each  input fields");
      return;
    }
    const result = await UserLogin(formvalue);
    console.log(result);
    if (result) {
      navigate("/");
    }
  };
  return (
    <>
      <div
        className="main"
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="left" style={{ marginLeft: "50px" }}>
          <h1>Don’t have an account?</h1>
          <h3>Your personal job finder is here</h3>
          <br />

          <input
            type="text"
            placeholder="Email"
            onInput={(e) =>
              setFormValue({
                ...formvalue,
                Email: e.target.value,
              })
            }
            value={formvalue.Email}
          ></input>
          <br />
          <br />
          <input
            type="text"
            placeholder="Password"
            onInput={(e) =>
              setFormValue({
                ...formvalue,
                Password: e.target.value,
              })
            }
            value={formvalue.Password}
          ></input>
          <br />
          <br />
          <button type="submit" onClick={handlelogin}>
            Sign In
          </button>
          <br />
          <p>
            Already have an account?
            <span
              className="sign in"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/register")}
            >
              Sign up
            </span>
          </p>
        </div>

        <div
          className="right"
          style={{ display: "flex", float: "right", marginLeft: "60px" }}
        >
          <img
            src="welcome-img.png"
            style={{ height: "600px", width: "600px" }}
          />
          <div
            className="text"
            style={{
              position: "absolute",
              color: "white",
              marginLeft: "15%",
              fontSize: "20px",
              marginTop: "30px",
            }}
          >
            Your Personal Job Finder
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
