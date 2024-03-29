import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
//import getJobdetailbtid from "./authbyid";

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
            width: "100vw",
            height: "100vh",
            background: "#FFEEEE",
          }}
        >
          <div
            className="navbar"
            style={{
              width: "1400px",
              height: "130px",
              borderRadius: "0px, 0px, 62px, 55px",
              background: "#ED5353",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                marginLeft: "20px",
                marginTop: "20px",
                fontSize: "20px",
                color: "white",
              }}
            >
              Jobfinder
            </div>

            <div
              style={{ marginLeft: "70%", marginTop: "20px", color: "white",cursor:'pointer' }}
            >
              LogIn
            </div>
            <div
              style={{ marginLeft: "20px", marginTop: "20px", color: "white", cursor:'pointer' }}
            >
              Hello! Recruiter
            </div>
            {!!token ? (
              <div
                onClick={logout}
                style={{
                  height: "30px",
                  width: "100px",
                  color: "white",
                  marginLeft: "20px",
                  marginTop: "20px",
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
              width: "1200px",
              height: "300px",
              background: "lightblue",
              marginLeft: "5%",
              marginTop: "20px",
            }}
          >
            <p style={{ marginLeft: "40%" }}>{details.Position}</p>
            <p style={{ marginLeft: "10px" }}>{details.LocationType}</p>
            <p style={{ marginLeft: "10px" }}>{details.JobType}</p>
            <p style={{ marginLeft: "10px" }}>Work at</p>
            <p style={{ marginLeft: "10px" }}>{details.CompanyName}</p>
          </div>
        
          <div
            style={{
              width: "1200px",
              background: "lightblue",
              marginLeft: "5%",
              marginTop: "20px",
            }}
          >
            <div className="details">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "30px",
                  marginLeft: "20px",
                }}
              >
                <p>1w ago .</p>
                <p style={{ marginLeft: "20px" }}>{details.JobType}</p>
                <img
                  src="bluetile.png"
                  style={{ height: "30px", width: "30px", marginLeft: "20px" }}
                />
                <p style={{ marginLeft: "20px" }}>{details.CompanyName}</p>
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "30px",
                  marginLeft: "20px",
                }}
              >
                <div style={{fontSize:'30px'}}>{details.Position}</div><br/>
            
                <div style={{ display:'flex',
                      marginLeft:'50%'}}>
            <button style={{ background: "#ED5353",
                      color: "white",
                      height: "30px",
                      width: "100px"
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
              </div>
              <div style={{ color: "red", marginLeft: "20px" }}>
                {details.JobLocation}
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "20px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>Salary</p>
                  <br />
                  <p>{details.MonthlySalary}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "40px",
                  }}
                >
                  <p>Duration</p>
                  <br />
                  <p>6 Month</p>
                </div>
              </div>
            </div>
            <br />

            <div style={{ marginLeft: "20px" }}>
              <span style={{ fontSize: "30px" }}>About Company</span>
              <p>{details.AboutCompany}</p>
              <br />
              <span style={{ fontSize: "30px" }}>About job</span>
              <p>{details.JobDescription}</p>
              <br />
              <div className="info">
                <h2>Skills Required</h2>
                {details?.Skills?.map((skill) => {
                  return (
                    <p className={skill} key={skill}>
                      {skill}
                    </p>
                  );
                })}
              </div>
              <span style={{ fontSize: "30px" }}>Additional Information</span>
              <p>{details.Information}</p>
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
