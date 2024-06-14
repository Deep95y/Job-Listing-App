import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
//import getJobdetailbtid from "./authbyid";
import { MdWork } from 'react-icons/md'; // Work icon for laptop bag
import { FaMoneyBillAlt } from 'react-icons/fa';

const Mainpage = () => {
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("token"));
  let { id } = useParams();

  
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const { state } = useLocation();
  const [details, setDetails] = useState(null);
  const [isLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    if (state && state.result) {
      setDetails(state.result.data);
    
    }
  }, []);

  

  return (
    <>
      {details ? (
        <div
          className="main"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            background: "#FFEEEE",
          }}
        >
          <div
            className="navbar"
            style={{
              width: "1350px",
              height: "100px",
              borderRadius: "0px, 0px, 62px, 55px",
              borderBottomLeftRadius: '40px',
              borderBottomRightRadius:'40px',
              background: "#ED5353",
              display: "flex",
              flexDirection: "row",
          
            }}
          >
            <div
              style={{
                marginLeft: "20px",
                marginTop: "30px",
                fontSize: "20px",
                color: "white",
              }}
            >
              Jobfinder
            </div>

            <div
              style={{ marginLeft: "70%", marginTop: "30px", color: "white",cursor:'pointer' }}
            >
              LogIn
            </div>
            {isLoggedIn ? (
            <div
              style={{ marginLeft: "20px", marginTop: "30px", color: "white", cursor:'pointer' }}
            >
              Hello! Recruiter
            </div>
            ):(
              ""
            )}
            {isLoggedIn ? (
              <div
                onClick={logout}
                style={{
                  height: "30px",
                  width: "100px",
                  color: "white",
                  marginLeft: "20px",
                  marginTop: "30px",
                  cursor:'pointer'
                }}
              >
                Logout
              </div>
            ) : (
              ""
            )}
          </div>

          <div
            className="jobtitle"
            style={{
              display: "flex",
              flexDirection: "row",
              width: "1000px",
              height: "100px",
              background: "white",
              marginLeft: "13%",
              position:'absolute',
              marginTop:'80px',
              fontWeight:'bold',
              fontSize:'30px',
              fontFamily:'sans-serif'
            }}
          >
            <p style={{ marginLeft: "20%" }}>{details.Position}</p>
            <p style={{ marginLeft: "10px" }}>{details.LocationType}</p>
            <p style={{ marginLeft: "10px" }}>{details.JobType}</p>
            <p style={{ marginLeft: "10px" }}>Work at</p>
            <p style={{ marginLeft: "10px" }}>{details.CompanyName}</p>
          </div>
        
          <div
            style={{
              width: "1000px",
              background: "white",
              marginLeft: "13%",
              marginTop: "120px",
            }}
          >
            <div className="details">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "30px",
                  marginLeft: "40px",
                }}
              >
                <p style={{color:'#999999'}}>1w ago .</p>
                <p style={{ marginLeft: "20px",color:'#999999' }}>{details.JobType}</p>
                <img
                  src={details.LogoUrl}
                  style={{ height: "30px", width: "30px", marginLeft: "20px" }}
                />
                <p style={{ marginLeft: "20px",color:'#999999' }}>{details.CompanyName}</p>
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "30px",
                  marginLeft: "40px",
                }}
              >
                <div style={{fontSize:'40px',fontWeight:'bold'}}>{details.Position}</div><br/>

                {isLoggedIn &&  (
                <div style={{ display:'flex',marginLeft:'60%'}}>
            <button style={{ background: "#ED5353",
                      color: "white",
                      height: "30px",
                      width: "100px",
                      borderStyle:'none',
                      borderRadius:'5px',
                      marginTop:'10px',
                    
                    }}
              onClick={() => {
                navigate("/addjob", {
                  state: {
                    id: details._id,
                    jobDetails: details,
                    edit: true,
                  
                  },
                });
              }}
              className="edit"
            >
              Edit Job
            </button>
          </div>
                )}
              </div>
              <div style={{ color: "red", marginLeft: "40px" }}>
                {details.JobLocation}
              </div>
              <br /><br/>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "40px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{color:'#999999'}}><FaMoneyBillAlt size={20} color="#595959"/>Stipend</div>
                  <br />
                  <div style={{color:'#595959'}}>{details.MonthlySalary}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "40px",
                  }}
                >
                  <div style={{color:'#999999'}}><MdWork size={20} color="#595959" />Duration</div>
                  <br />
                  <div style={{color:'#595959'}}>6 Month</div>
                </div>
              </div>
            </div>
            <br />
           <br/>
            <div style={{ marginLeft: "40px",marginTop:'20px' }}>
              <span style={{ fontSize: "30px",fontFamily:'sans-serif',fontWeight:'30px' }}>About Company</span>
              <p style={{color:'#595959'}}>{details.AboutCompany}</p>
              <br />
              <span style={{ fontSize: "30px" }}>About job</span>
              <p style={{color:'#595959'}}>{details.JobDescription}</p>
              <br />
              <h2>Skills Required</h2>
              <div className="info" style={{display:'flex',flexDirection:'row'}}>
               
                {details?.Skills?.map((skill) => {
                  return (
                    <div className={skill} key={skill} style={{height:'30px',width:'70px',background:'#FFEEEE',marginLeft:'10px',borderRadius:'5px',textAlign:'center',color:'#595959'}}>
                      {skill}
                    </div>
                  );
                })}
              </div>
              <span style={{ fontSize: "30px" }}>Additional Information</span>
              <p >{details.Information}</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      ;
    </>
  );
};
export default Mainpage;
