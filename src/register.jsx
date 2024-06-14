import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import UserRegistered from "./authorizeReg";

const Register = () => {
  const navigate = useNavigate();
  const [boxChecked, setBoxChecked] = useState(false);
  const [formvalue, setFormValue] = useState({
    Name: "",
    Email: "",
    Password: "",
    Mobile: "",
  });

  // const handleInput = (event) => {
   
  //   setFormValue({ ...formvalue, [event.target.name]: event.target.value });
  
  // };

  const handleRegister = async () => {
    if (
      !formvalue.Name ||
      !formvalue.Email ||
      !formvalue.Password ||
      !formvalue.Mobile
    ) {
      alert("Enter each  input fields");
      return;
    }
    if (!boxChecked) {
      alert("need to check the box");
    
    }
    
     await UserRegistered(formvalue);
    
  };

  useEffect(() => {
    console.log(formvalue);
    console.log(boxChecked);
  }, [formvalue]);


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
        <div className="left" style={{ marginLeft: "50px",marginTop:'3%',marginLeft:'8%' }}>
          <h1>Create an account</h1>
          <p style={{color:'#525252',fontFamily:'sans-serif'}}>Your personal job finder is here</p>
          <br />
          <input type="text" placeholder="Name"  
          onInput={(e) =>
            setFormValue({
                  ...formvalue,
                  Name: e.target.value,
                })
              }
              value={formvalue.Name} style={{height:'35px',width:'400px',borderRadius:'6px',borderColor:'#C2C2C2'}}></input>
          <br />
          <br />
          <input type="text" placeholder="Email"   
          onInput={(e) =>
            setFormValue({
                  ...formvalue,
                  Email: e.target.value,
                })
              }
              value={formvalue.Email}  style={{height:'35px',width:'400px',borderRadius:'6px',borderColor:'#C2C2C2'}}></input>
          <br />
          <br />
          <input
            type="text"
            placeholder="Mobile"
            onInput={(e) =>
              setFormValue({
                    ...formvalue,
                    Mobile: e.target.value,
                  })
                }
                value={formvalue.Mobile} 
            style={{height:'35px',width:'400px',borderRadius:'6px',borderColor:'#C2C2C2'}}
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
            style={{height:'35px',width:'400px',borderRadius:'6px',borderColor:'#C2C2C2'}}
          ></input>
          <br />
          <br /><br/>
          <div style={{ display: "flex",flexDirection:'row' }}>
            <div>
            <input
              type="checkbox"
              onChange={(e) => setBoxChecked(e.target.checked)}
            ></input></div>
            <div style={{marginLeft:'10px'}}>
              By creating an account, I agree to our terms of use and privacy policy
            </div>
       
          </div>
          <br/><br/>
          <button type="submit" onClick={handleRegister} style={{height:'30px',width:'150px',background:'#ED5353',borderRadius:'5px',borderStyle:'none',color:'white'}}>
            Create Account
          </button>
          <br />
          <p>
            Don’t have an account?
            <span
              className="signin"
              style={{ cursor: "pointer",fontWeight:'bold'}}
              onClick={() => navigate("/login")}
            >
              SignIn
            </span>
          </p>
        </div>

        <div
          className="right"
          style={{ display: "flex", float: "right", marginLeft: "90px" }}
        >
          <img
            src="welcome-img.png"
            style={{ height: "620px", width: "750px",marginLeft:'20%' }}
          />
          <div
            className="text"
            style={{
              position: "absolute",
              color: "white",
              marginLeft: "25%",
              fontSize: "20px",
              marginTop: "50px",
            }}
          >
            Your Personal Job Finder
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
