import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import UserLogin from "./authlogin";
import Homepage from './homepg';

const Login = () => {
  const navigate = useNavigate();
  const [formvalue, setFormValue] = useState({
    Email: "",
    Password: "",
  });


  console.log(formvalue);
 const[token] = useState(localStorage.getItem("token"));
 console.log(token);
 
  const handlelogin = async () => {
    if (!formvalue.Email || !formvalue.Password) {
      alert("Enter each  input fields");
      return;
    }
    const result = await UserLogin(formvalue);
    console.log(result);
    if (token) {
      navigate("/homepg");
    }
  };


  return (
    <>
      <div
        className="main"
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="left" style={{ marginLeft: "90px",marginTop:'5%' }}>
          <h1>Already have an account?</h1>
          <p style={{color:'#525252',fontFamily:'sans-serif'}}>Your personal job finder is here</p>
          <br />

          <input
            type="text"
            placeholder="Email"
            style={{height:'35px',width:'400px',borderRadius:'6px',borderColor:'#C2C2C2'}}
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
            style={{height:'35px',width:'400px',borderRadius:'6px',borderColor:'#C2C2C2'}}
            onInput={(e) =>
              setFormValue({
                ...formvalue,
                Password: e.target.value,
              })
            }
            value={formvalue.Password}
          ></input>
          <br />
          <br /><br/><br/>
          <button type="submit" onClick={handlelogin} style={{height:'30px',width:'150px',background:'#ED5353',borderRadius:'5px',borderStyle:'none',color:'white'}}>
            Sign In
          </button>
          <br />
          <p>
            Already have an account?
            <span
              className="sign in"
              style={{ cursor: "pointer",fontWeight:'bold' }}
              onClick={() => navigate("/register")}
            >
              Sign up
            </span>
          </p>
        </div>

        <div
          className="right"
          style={{ display: "flex", float: "right", marginLeft: "10%" }}
        >
          <img
            src="welcome-img.png"
            style={{ height: "600px", width: "700px",marginLeft:'10%' }}
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
