import React, { useState, useEffect } from "react";
import getJobdetail from "./authdetails";
import { useNavigate } from "react-router";
import getJobdetailbtid from "./authbyid";
import './index.css';
import { MdPeople } from 'react-icons/md';
import { FaRupeeSign } from 'react-icons/fa';

const Homepage = () => {
  const Skills = [
    "html",
    "css",
    "js",
    "react",
    "node",
    "next",
    "express",
    "tailwind",
  ];
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [title, setTitle] = useState("");
  const [jobs, setJobs] = useState([]);
  const [isLoggedIn] = useState(!!localStorage.getItem("token"));
  //   console.log("code");
  //   console.log(jobs);
const[token] = useState(localStorage.getItem("token"));
console.log(token);
console.log(isLoggedIn);
  const handleSkills = (event) => {
    const array = skills.filter((skill) => skill === event.target.value);
    if (!array.length) {
      setSkills([...skills, event.target.value]);
    }
  };

  const removeSkills = (selectedSkill) => {
    const array = skills.filter((skill) => skill !== selectedSkill);
    setSkills([...array]);
  };

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
};


  const handleView = async (id) => {
    const result = await getJobdetailbtid(id);
    navigate("/mainpage", {
      state: {
        result,
      },
    });
  };

  const handleClear = () => {
    setTitle("");
    setSkills([]);
  };

  const handleAdd = () => {
    navigate("/addjob");
  };

  // useEffect = (() => {
  //     fetchDetails();
  // }, []);

  const fetchDetails = async () => {
    const sortedSkills = skills.join(",");
    const result = await getJobdetail({ title, skills: sortedSkills });
    setJobs(result?.data);
  };

  return (
    <>
      <div
        className="main"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="navbar"
          style={{
            width: "1350px",
            height: "130px",
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
              marginTop: "20px",
              fontSize: "20px",
              color: "white",
            }}
          >
            Jobfinder
          </div>
          {!isLoggedIn && (
          <div style={{marginLeft:'50%'}}><button style={{ marginLeft: "70%", marginTop: "20px", color: "white",cursor:'pointer',height:'25px',width:'100px',borderColor:'white',background:'#ED5353',borderRadius:'6px'}}>
            LogIn
            </button>
          </div>
          )}
           {!isLoggedIn && (
          <div
            style={{ marginLeft: "100px", marginTop: "20px", color: "white", cursor:'pointer',height:'25px',width:'100px',borderColor:'white',background:'white',borderRadius:'6px',color:'#ED5353',textAlign:'center'}}
          >
            Register
          </div>
           )}
          {isLoggedIn && (
          <div
              style={{ marginLeft: "30px", marginTop: "20px", color: "white", cursor:'pointer' }}
            >
              Hello! Recruiter
            </div>
              )}
          {isLoggedIn && (
            <div
              onClick={logout}
              style={{
                height: "30px",
                width: "100px",
                color: "white",
                marginLeft: "30px",
                marginTop: "20px",
                cursor:'pointer'
              }}
            >
              Logout
            </div>
    
          )}
        </div>
        <div>
          <div
            className="infobar"
            style={{
              width: "1200px",
              height: "200px",
              borderRadius: "0px, 0px, 62px, 55px",
              background: "white",
              display: "flex",
              flexDirection: "column",
              borderColor: "#FF202040",
              borderStyle: "inset",
              marginTop: "30px",
              marginLeft: "5%",
            }}
          >
            <input
              type="text"
              placeholder="Type any job title here"
              className="input"
              onChange={(event) => setTitle(event.target.value)}
              style={{
                width: "1000px",
                height: "40px",
                marginTop: "30px",
                marginLeft: "7%",
                borderRadius: "10px",
                borderColor:'#9C9C9C'
              }}
            />

            <div>
              <select
                className="text"
                placeholder="skills"
                onChange={handleSkills}
                value=""
                style={{
                  marginLeft: "7%",
                  marginTop: "30px",
                  height: "30px",
                  width: "100px",
                  borderRadius: "10px",
                  borderColor:'#9C9C9C'
                }}
              >
                <option value="">Skills</option>
                {Skills.map((element, index) => (
                  <option style={{background: '#ED5353'
                  }} key={index} value={element}>
                    {element}
                  </option>
                ))}
              </select>
            </div>
            <br />

            <div className="Skills">
              <div style={{display:'flex',flexDirection:'row'}}>
              {skills?.map((element, index) => (
                <div key={index} style={{marginLeft:'10px',height:'20px',width:'60px',background:'#FFEEEE',display:'flex',flexDirection:'row'}}>
                  <div>{element}&nbsp;</div>
                  <div><button style={{ background: "#ED5353",color:"white",borderStyle:'none',height:'20px',width:'20px'}} onClick={() => removeSkills(element)}>X</button></div>
                </div>
              ))}
              </div>
            </div>
            <div style={{ display:'flex',flexDirection:'row',marginLeft:'70%' }}>
              <div>
              <button
                type="button"
                style={{
                  background: "#ED5353",
                  color: "white",
                  height: "30px",
                  width: "100px",
                  borderStyle:'none',
                  borderRadius:'5px'
                }}
                onClick={fetchDetails}
              >
                Apply Filter
              </button>
            </div>
            {isLoggedIn && (
            <div style={{ marginLeft:'10px'}}>
              <button
                type="button"
                style={{
                  background: "#ED5353",
                  color: "white",
                  height: "30px",
                  width: "100px",
                  borderStyle:'none',
                  borderRadius:'5px'
                }}
                onClick={handleAdd}
              >
                + Add job
              </button>
            </div>
           
            )}
            <div
              style={{
               marginLeft:'10px'
              }}
            >
              <button
                type="button"
                style={{ background: "white", color: "#ED5353",borderStyle:'none',marginTop:'5px' }}
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
            </div>
          </div>
        </div>
        {jobs?.map((data) => {
          return (
            <div
              className="joblist"
              key={data._id}
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "10%",
                width: "1000px",
                height: "160px",
                borderRadius: "0px, 0px, 62px, 55px",
                borderLeftStyle:'inset',
                borderLeftColor:'#ED5353',
                marginTop: "30px",
              }}
            >
              <div>
                <div
                  className="position"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "20px",
                    marginLeft: "20px",
                  }}
                >
                  <div
                    className="compimg"
                    style={{ height: "50px", width: "50px", display: "flex" }}
                  >
                    <img
                      src={data.LogoUrl}
                      style={{ height: "60px", width: "60px" }}
                    />
                    <div style={{ position: "absolute",color:'white' }}>
                      {data.CompanyName}
                    </div>
                  </div>
                  <div style={{marginLeft:'50px',fontWeight:'bold'}}>{data.Position}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p style={{ marginLeft: "20px",color:'#9C9C9C' }}> <MdPeople size={15} color="blue" />11-50</p>
                  <p style={{ marginLeft: "20px",color:'#9C9C9C' }}> <FaRupeeSign size={12} color="blue" />{data.MonthlySalary}</p>
                  <img
                    src="flag.png"
                    style={{
                      height: "30px",
                      width: "30px",
                      marginLeft: "20px",
                      color:'#9C9C9C'
                    }}
                  />
                  <p>{data.JobLocation}</p>
                </div>
                <br />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "40%",
                    
                  }}
                >
                  <div style={{ color: "#ED5353"}}>{data.LocationType}</div>
                  <div style={{ color: "#ED5353", marginLeft: "20%" }}>
                    {data.JobType}
                  </div>
                </div>
              </div>
              <div
                className="skilllist"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "40%",
                }}
              >
                <div style={{display:'flex',flexDirection:'row',marginTop:'20px'}}>
                  {data?.Skills?.map((skill) => {
                    return (
                     
                      <div key={skill} style={{height:'30px',width:'80px',background:'#FFEEEE',color:'black',marginLeft:'10px',textAlign:'center'}}>
                        {skill}
                      </div>
                    );
                  })}
                </div>
                <br />
                <div style={{display:'flex',flexDirection:'row'}}>
                {isLoggedIn && (
                <div style={{marginLeft:'50%',marginTop:'30px'}}>
                            <button style={{background:'white',color:'#ED5353',height:'30px', width:'100px',borderColor:'#ED5353',borderRadius:'5px'}} 
                                    // onClick={() =>
                                    //     navigate("/addjob", {
                                    //         state: { id: data._id, edit: true }, 
                                    //     })
                                    // }
                                  
                                >
                                    Edit job
                                </button> </div>
                
                )}
                <div style={{ marginLeft: "5%",marginTop:'30px' }}>
                  <button
                    type="button"
                    style={{
                      background: "#ED5353",
                      color: "white",
                      height: "30px",
                      width: "100px",
                      borderStyle:'none',
                      borderRadius:'5px'
                    }}
                    onClick={() => handleView(data._id)}
                  >
                    View details
                  </button>
                </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Homepage;
