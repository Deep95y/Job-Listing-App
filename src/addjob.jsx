
import React, {useState} from "react"; 
import UserAdded from './authjob';
import { useNavigate } from "react-router";


const Addjob = () => {
    console.log("qwe");
    const[formvalue, setFormValue] = useState({
    
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
        Information: ""
      });
      console.log(formvalue);
      // const handleChange = (event) => {
      //   setFormValue({...formvalue, [event.target.name]: event.target.value})

      const navigate = useNavigate();
      const handleAddJob = async () => {
        if(
            !formvalue.CompanyName||
            !formvalue.LogoUrl||
            !formvalue.Position||
            !formvalue.MonthlySalary||
            !formvalue.JobType||
            !formvalue.LocationType||
            !formvalue.JobLocation||
            !formvalue.JobDescription||
            !formvalue.AboutCompany||
            !formvalue.Skills.length||
            !formvalue.Information


           ) {
             alert("Enter each  input fields");
             return;
           }

          await UserAdded(formvalue);
          navigate('/');
      }

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
      ]

    return(
        <>

        <div className="main" style={{height:'100vh',width:'100vw',display:'flex',flexDirection:'row'}}>
        <div className="left" style={{display:'flex', flexDirection:'column',float:'left', marginLeft:'40px'}}>
        <h2>Add job description</h2>
       <div ><label htmlFor = "Company Name">Company Name:</label> 
        <input type ="text" placeholder="Enter your company name here"  onInput = {(e) => setFormValue({
            ...formvalue, CompanyName: e.target.value })}value = {formvalue.CompanyName}/></div><br/>
       <div> <label htmlFor = "Add logo URL">Add logo URL:</label>
        <input type ="text" placeholder="Enter job position"   onInput = {(e) => setFormValue({
            ...formvalue, LogoUrl: e.target.value })} value = {formvalue.LogoUrl}/></div><br/>
        <div><label htmlFor = "Job position">Job position:</label>
        <input type ="text" placeholder="Enter Amount in rupees"  onInput = {(e) => setFormValue({
            ...formvalue, Position: e.target.value })} value = {formvalue.Position}/></div><br/>
        <div><label htmlFor = "Monthly salary">Monthly salary:</label>
        <input type = "text" placeholder="Monthly salary" onInput = {(e) => setFormValue({
            ...formvalue, MonthlySalary: e.target.value })} value = {formvalue.MonthlySalary}/></div><br/>
        <div><label htmlFor = "Job type">Job type:</label>
        <select className ="dropdown" placeholder="Select"  onInput = {(e) => setFormValue({
            ...formvalue, JobType: e.target.value })} value = {formvalue.JobType}>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option></select></div><br/>
        <div><label htmlFor = "location Type">Job Type:</label>
        <select className="dropdown" placeholder="Select"  onChange = {(e) => setFormValue({
            ...formvalue, LocationType: e.target.value })} value = {formvalue.LocationType}>
        <option value="Remote">Remote</option>
        <option value="Office">Office</option></select></div><br/>
        <div><label htmlFor = "Location">Location:</label>
        <input type ="text" placeholder="Job Description"  onChange = {(e) => setFormValue({
            ...formvalue, JobLocation: e.target.value })}value = {formvalue.JobLocation}/></div><br/>
        <div><label htmlFor = "Job Description">Job Description:</label>
        <input type ="text" placeholder="Type the job description"  onInput = {(e) => setFormValue({
            ...formvalue, JobDescription: e.target.value })} value = {formvalue.JobDescription}/></div><br/>
       <div><label htmlFor = "About Company">About Company:</label>
        <input type ="text" placeholder="Type about your company"   onInput = {(e) => setFormValue({
            ...formvalue, AboutCompany: e.target.value })}value = {formvalue.AboutCompany}/></div><br/>
       <div><label htmlFor = "Skills Required">Skills Required:</label>
        <select className="text" placeholder="Enter the must have skills" onChange={addSkills} value = {formvalue.Skills}>
        {Skills.map((element, index) => (
                            <option  key={index} value={element}>{element}</option>
            ))}</select>
        </div><br/>
        
        <div className= "Skills">
                    {formvalue.Skills.map((element, index) => (
                        <div key= {index}>
                            {element}&nbsp;
                            <button onClick={() => removeSkills(element)}>
                                X
                            </button>
                        </div>
                    ))}
                </div>
        <div><label htmlFor = "Information">Information:</label>
        <input type ="text" placeholder="Enter the additional information"  onInput = {(e) => setFormValue({
            ...formvalue, Information: e.target.value })} value = {formvalue.Information}></input></div><br/>
        <div style={{flexWrap:'wrap',marginLeft:'40%'}}><button type = "submit">Cancel</button>
        <button type = "submit" style={{marginLeft:'20px',background:'#ED5353'}} onClick={handleAddJob}>+ Add jobs</button></div><br/>      
        </div>
        <div className="right" style={{display:'flex', float:'right'}}>
            <img src = "second.png" style={{height:'600px',width:'600px',marginLeft:'60%'}}/>
            <div style={{position:'absolute',marginLeft:'40%',color:'white',marginTop:'20px',fontSize:'20px'}}>Recruiter add job details here</div>
        </div>
        </div>

        </>
    );
}

export default Addjob;