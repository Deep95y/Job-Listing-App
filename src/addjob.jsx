import React, { useState } from "react";
import UserAdded from "./authjob";
import { useNavigate } from "react-router";

const Addjob = () => {
  console.log("qwe");
  const [formvalue, setFormValue] = useState({
    CompanyName: "",
    LogoUrl: "",
    Position: "",
    MonthlySalary: "",
    JobType: "",
    LocationType: "",
    JobLocation: "",
    JobDescription: "",
    AboutCompany: "",
    Skills: [],
    Information: "",
  });
  console.log(formvalue);
  // const handleChange = (event) => {
  //   setFormValue({...formvalue, [event.target.name]: event.target.value})

  const navigate = useNavigate();
  const handleAddJob = async () => {
    if (
      !formvalue.CompanyName ||
      !formvalue.LogoUrl ||
      !formvalue.Position ||
      !formvalue.MonthlySalary ||
      !formvalue.JobType ||
      !formvalue.LocationType ||
      !formvalue.JobLocation ||
      !formvalue.JobDescription ||
      !formvalue.AboutCompany ||
      !formvalue.Skills.length ||
      !formvalue.Information
    ) {
      alert("Enter each  input fields");
      return;
    }

    await UserAdded(formvalue);
    navigate("/");
  };

  const addSkills = (event) => {
    const skill = event.target.value;
    const actualSkillList = formvalue.Skills;
    const filteredSkills = actualSkillList.filter(
      (element) => element === skill
    );
    if (!filteredSkills.length) {
      setFormValue({ ...formvalue, Skills: [...formvalue.Skills, skill] });
    }
  };

  const removeSkills = (skill) => {
    const actualSkillList = formvalue.Skills;
    const filteredSkills = actualSkillList.filter(
      (element) => element !== skill
    );
    setFormValue({ ...formvalue, Skills: filteredSkills });
  };

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
        <div
          className="left"
          style={{
            display: "flex",
            flexDirection: "column",
            float: "left",
            marginLeft: "40px",
          }}
        >
          <h1>Add job description</h1>
          <div>
            <label htmlFor="Company Name">Company Name</label>
            <input
              type="text"
              placeholder="Enter your company name here"
              style={{marginLeft:'30px',height:'25px',width:'400px',borderRadius:'5px',borderColor:'#C2C2C2'}}
              onInput={(e) =>
                setFormValue({
                  ...formvalue,
                  CompanyName: e.target.value,
                })
              }
              value={formvalue.CompanyName}
            />
          </div>
          <br />
          <div>
            {" "}
            <label htmlFor="Add logo URL">Add logo URL</label>
            <input
              type="text"
              placeholder="Enter job position"
              style={{marginLeft:'39px',height:'25px',width:'400px',borderRadius:'5px',borderColor:'#C2C2C2'}}
              onInput={(e) =>
                setFormValue({
                  ...formvalue,
                  LogoUrl: e.target.value,
                })
              }
              value={formvalue.LogoUrl}
            />
          </div>
          <br />
          <div>
            <label htmlFor="Job position">Job position:</label>
            <input
              type="text"
              placeholder="Enter Amount in rupees"
              style={{marginLeft:'53px',height:'25px',width:'400px',borderRadius:'5px',borderColor:'#C2C2C2'}}
              onInput={(e) =>
                setFormValue({
                  ...formvalue,
                  Position: e.target.value,
                })
              }
              value={formvalue.Position}
            />
          </div>
          <br />
          <div>
            <label htmlFor="Monthly salary">Monthly salary</label>
            <input
              type="text"
              placeholder="Monthly salary"
              style={{marginLeft:'38px',height:'25px',width:'400px',borderRadius:'5px',borderColor:'#C2C2C2'}}
              onInput={(e) =>
                setFormValue({
                  ...formvalue,
                  MonthlySalary: e.target.value,
                })
              }
              value={formvalue.MonthlySalary}
            />
          </div>
          <br />
          <div>
            <label htmlFor="Job type">Job type:</label>
            <select
              className="dropdown"
              placeholder="Select"
              style={{marginLeft:'76px',height:'25px',width:'200px',borderRadius:'5px',borderColor:'#C2C2C2'}}
              onInput={(e) =>
                setFormValue({
                  ...formvalue,
                  JobType: e.target.value,
                })
              }
              value={formvalue.JobType}
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="location Type">Job Type:</label>
            <select
              className="dropdown"
              placeholder="Select"
              style={{marginLeft:'72px',height:'25px',width:'200px',borderRadius:'5px',borderColor:'#C2C2C2'}}
              onChange={(e) =>
                setFormValue({
                  ...formvalue,
                  LocationType: e.target.value,
                })
              }
              value={formvalue.LocationType}
            >
              <option value="Remote">Remote</option>
              <option value="Office">Office</option>
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="Location">Location:</label>
            <input
              type="text"
              placeholder="Job Description"
              style={{marginLeft:'70px',height:'25px',width:'400px',borderRadius:'5px',borderColor:'#C2C2C2'}}
              onChange={(e) =>
                setFormValue({
                  ...formvalue,
                  JobLocation: e.target.value,
                })
              }
              value={formvalue.JobLocation}
            />
          </div>
          <br />
          <div>
            <label htmlFor="Job Description">Job Description:</label>
            <input
              type="text"
              placeholder="Type the job description"
              style={{marginLeft:'25px',height:'25px',width:'400px',borderRadius:'5px',borderColor:'#C2C2C2'}}
              onInput={(e) =>
                setFormValue({
                  ...formvalue,
                  JobDescription: e.target.value,
                })
              }
              value={formvalue.JobDescription}
            />
          </div>
          <br />
          <div>
            <label htmlFor="About Company">About Company:</label>
            <input
              type="text"
              placeholder="Type about your company"
              style={{marginLeft:'20px',height:'25px',width:'400px',borderRadius:'5px',borderColor:'#C2C2C2'}}
              onInput={(e) =>
                setFormValue({
                  ...formvalue,
                  AboutCompany: e.target.value,
                })
              }
              value={formvalue.AboutCompany}
            />
          </div>
          <br />
          <div>
            <label htmlFor="Skills Required">Skills Required:</label>
            <select
              className="text"
              placeholder="Enter the must have skills"
              style={{marginLeft:'27px',height:'25px',width:'400px',borderRadius:'5px',borderColor:'#C2C2C2'}}
              onChange={addSkills}
              value={formvalue.Skills}
            >
              {Skills.map((element, index) => (
                <option key={index} value={element}>
                  {element}
                </option>
              ))}
            </select>
          </div>
          <br />

          <div className="Skills">
            {formvalue.Skills.map((element, index) => (
              <div key={index}>
                {element}&nbsp;
                <button onClick={() => removeSkills(element)}>X</button>
              </div>
            ))}
          </div>
          <div>
            <label htmlFor="Information">Information:</label>
            <input
              type="text"
              placeholder="Enter the additional information"
              style={{marginLeft:'50px',height:'25px',width:'400px',borderRadius:'5px',borderColor:'#C2C2C2'}}
              onInput={(e) =>
                setFormValue({
                  ...formvalue,
                  Information: e.target.value,
                })
              }
              value={formvalue.Information}
            ></input>
          </div>
          <br />
          <div style={{ flexWrap: "wrap", marginLeft: "40%" }}>
            <button type="submit" 
            style={{marginLeft:'100px',height:'30px',width:'100px',borderRadius:'5px',borderStyle:'none',color:'black'}}>Cancel</button>
            
            <button
              type="submit"
              style={{marginLeft:'20px',height:'30px',width:'100px',background:'#ED5353',borderRadius:'5px',borderStyle:'none',color:'white'}}
              onClick={handleAddJob}
            >
              + Add jobs
            </button>
          </div>
          <br />
        </div>
        <div className="right" style={{ display: "flex", float: "right" }}>
          <img
            src="second.png"
            style={{ height: "650px", width: "550px", marginLeft: "35%" }}
          />
          <div
            style={{
              position: "absolute",
              marginLeft: "25%",
              color: "white",
              marginTop: "40px",
              fontSize: "20px",
            }}
          >
            Recruiter add job details here
          </div>
        </div>
      </div>
    </>
  );
};

export default Addjob;
