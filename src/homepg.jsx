import React from "react";


const Homepage = () => {
    getJobdetail(filter)
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
    return (
    <>
    <div className="main" style={{display:'flex', flexDirection:'column',width: '100vw', height:'100vh',background: '#FFEEEE'}}>
        <div className="navbar" style={{width: '1400px', height:'130px', borderRadius: '0px, 0px, 62px, 55px',background:'#ED5353',display:'flex', flexDirection:'row'}}>
            <div style={{marginLeft:'20px', marginTop:'20px',fontSize:'20px',color:'white'}}>Jobfinder</div>
            
            <div style={{marginLeft:'70%',marginTop:'20px',color:'white'}}>Logout</div>
            <div style={{marginLeft:'20px',marginTop:'20px',color:'white'}}>Hello! Recruiter</div>
         
        </div>
        <div>
        <div className="infobar">
            <input type = "text" placeholder = "Type any job title here" className="input"/>

        </div>
        <div><label htmlFor = "Skills Required">Skills Required:</label>
        <select className="text" placeholder="skills" onChange={addSkills} value = {formvalue.Skills}>
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
                <div style={{marginLeft:'50%'}}><button type = "button" style={{background:'#ED5353',color:'white',height:'30px', width:'100px'}}>Apply Filter</button></div>
                <div style={{marginLeft:'50%'}}><button type = "button" style={{background:'#ED5353',color:'white',height:'30px', width:'100px'}}>+ Add job</button></div>
           <div style={{marginLeft:'50%'}}><button type = "button" style={{background:'white',color:'#ED5353'}}>Clear</button></div>
    
    </div>

    <div className="joblist">
           <div className="compimg">
            <img src = "bluetile.png" style={{height:'30px',width:'30px'}}/>
            <div>Company</div>
            </div>  <br/>       
    </div>
    <p>11-50</p>
    <p>$ Salary</p>
    <img src = "flag.png" style={{height:'30px',width:'30px'}}/>
    <p>Location</p>
    <div className="skilllist" style={{background: '#FFEEEE',color:"white"}}>Skills</div><br/>
    <p style={{color:'#ED5353'}}>location type</p>
    <p style={{color:'#ED5353'}}>job type</p>
    <div style={{marginLeft:'50%'}}><button type = "button" style={{background:'#ED5353',color:'white',height:'30px', width:'100px'}}>View details</button></div>
    


    </div>

    </>

    );
}
export default Homepage;

