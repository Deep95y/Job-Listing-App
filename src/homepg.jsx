import React, { useState, useEffect } from "react";
import getJobdetail from "./authdetails";
import { useNavigate } from "react-router";
import getJobdetailbtid from "./authbyid";

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
  const [token] = useState(localStorage.getItem("token"));
  //   console.log("code");
  //   console.log(jobs);
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
    localStorage.clear();
    navigate("/login");
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

          <div style={{ marginLeft: "70%", marginTop: "20px", color: "white",cursor:'pointer'}}>
            LogIn
          </div>
          <div
            style={{ marginLeft: "20px", marginTop: "20px", color: "white", cursor:'pointer'}}
          >
            Register
          </div>
          {!!token ? (
          <div
              style={{ marginLeft: "20px", marginTop: "20px", color: "white", cursor:'pointer' }}
            >
              Hello! Recruiter
            </div>
            ) : (
                ""
              )}
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
              borderStyle: "hidden",
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
              {skills?.map((element, index) => (
                <div key={index}>
                  {element}&nbsp;
                  <button style={{ background: "#ED5353",color:"white"}} onClick={() => removeSkills(element)}>X</button>
                </div>
              ))}
            </div>
            <div style={{ marginLeft: "70%" }}>
              <button
                type="button"
                style={{
                  background: "#ED5353",
                  color: "white",
                  height: "30px",
                  width: "100px",
                }}
                onClick={fetchDetails}
              >
                Apply Filter
              </button>
            </div>
            <div style={{ marginLeft: "70%" }}>
              <button
                type="button"
                style={{
                  background: "#ED5353",
                  color: "white",
                  height: "30px",
                  width: "100px",
                }}
                onClick={handleAdd}
              >
                + Add job
              </button>
            </div>
            <div
              style={{
                marginLeft: "70%",
                position: "absolute",
                marginTop: "10%",
              }}
            >
              <button
                type="button"
                style={{ background: "white", color: "#ED5353" }}
                onClick={handleClear}
              >
                Clear
              </button>
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
                height: "200px",
                borderRadius: "0px, 0px, 62px, 55px",
                background: "lightblue",
                marginTop: "30px",
              }}
            >
              <div>
                <div
                  className="position"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "30px",
                    marginLeft: "20px",
                  }}
                >
                  <div
                    className="compimg"
                    style={{ height: "50px", width: "50px", display: "flex" }}
                  >
                    <img
                      src={data.LogoUrl}
                      style={{ height: "40px", width: "40px" }}
                    />
                    <div style={{ position: "absolute" }}>
                      {data.CompanyName}
                    </div>
                  </div>
                  <div>{data.Position}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p style={{ marginLeft: "20px" }}>11-50</p>
                  <p style={{ marginLeft: "20px" }}>{data.MonthlySalary}</p>
                  <img
                    src="flag.png"
                    style={{
                      height: "30px",
                      width: "30px",
                      marginLeft: "20px",
                    }}
                  />
                  <p>{data.JobLocation}</p>
                </div>
                <br />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "7%",
                  }}
                >
                  <p style={{ color: "#ED5353" }}>{data.locationType}</p>
                  <p style={{ color: "#ED5353", marginLeft: "10%" }}>
                    {data.JobType}
                  </p>
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
                <div>
                  {data?.skills?.map((skill) => {
                    return (
                      <span className={styles.skill} key={skill}>
                        {skill}
                      </span>
                    );
                  })}
                </div>
                <br />
                {/* <div style={{marginLeft:'50%'}}>
                            <button style={{background:'#ED5353',color:'white',height:'30px', width:'100px'}} 
                                    onClick={() =>
                                        navigate("/addjob", {
                                            state: { id: data._id, edit: true }, 
                                        })
                                    }
                                    className={edit}
                                >
                                    Edit job
                                </button> </div> */}
                <div style={{ marginLeft: "50%" }}>
                  <button
                    type="button"
                    style={{
                      background: "#ED5353",
                      color: "white",
                      height: "30px",
                      width: "100px",
                    }}
                    onClick={() => handleView(data._id)}
                  >
                    View details
                  </button>
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
