import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router";
import UserRegistered from "./authorizeReg";


const Register = () => {

const navigate = useNavigate();
const [boxChecked, setBoxChecked] = useState(false);
const[formvalue, setFormValue] = useState({
  Name: "",
  Email: "",
  Password: "",
  Mobile: ""
});

const handleInput = (event) => {
  setFormValue({...formvalue, [event.target.name]: event.target.value})
}

const handleRegister = async () => {
  if(!formvalue.Name||
     !formvalue.Email||
     !formvalue.Password||
     !formvalue.Mobile
    ) {
      alert("Enter each  input fields");
      return;
    }
  if(!boxChecked) {
    alert("need to check the box");
    return;
  }
await UserRegistered(formvalue);
  
}

   useEffect(() => {
   console.log(formvalue);
      console.log(boxChecked);
 }, [formvalue]);
    return(
<>
<div className="main" style={{height:'100vh',width:'100vw',display:'flex',flexDirection:'row',}}>
        <div className="left" style={{marginLeft:'50px'}}>
      <h1>Create an account</h1>
      <h3>Your personal job finder is here</h3><br/>
      <input type = "text" placeholder="Name" onChange={handleInput}></input><br/><br/>
      <input type = "text" placeholder="Email" onChange={handleInput}></input><br/><br/>
      <input type = "text" placeholder="Mobile" onChange={handleInput}></input><br/><br/>
      <input type = "text" placeholder="Password" onChange={handleInput}></input><br/><br/>
      <div style={{display:'flex', flexWrap:'wrap'}}>
      <input type = "checkbox" onChange={(event) => setBoxChecked(event.target.checked)}></input>
      <p>By creating an account, I agree to our terms of use and privacy policy</p><br/></div>
      <button type = "submit" onClick={handleRegister}>Create Account</button><br/>
      <p>Don’t have an account?<span className="signin"  style={{cursor:'pointer'}} onClick={() => navigate("/login")}>SignIn</span></p>
      </div> 
      
      <div className="right" style={{display:'flex',float:'right',marginLeft:'60px'}}>
          <img src = "welcome-img.png" style={{height:'600px',width:'600px'}} />
         <div className="text" style={{position:'absolute', color:'white', marginLeft:'15%',fontSize:'20px',marginTop:'30px'}}>Your Personal Job Finder</div>
      </div>
     
      </div>
      </>
    );
}
export default Register;
