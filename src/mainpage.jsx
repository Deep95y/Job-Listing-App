import React from "react";

const Mainpage = () => {
    return(
        <>
        <div className="main" style={{display:'flex', flexDirection:'column',width: '100vw', height:'100vh',background: '#FFEEEE'}}>
        <div className="navbar" style={{width: '1400px', height:'130px', borderRadius: '0px, 0px, 62px, 55px',background:'#ED5353',display:'flex', flexDirection:'row'}}>
            <div style={{marginLeft:'20px', marginTop:'20px',fontSize:'20px',color:'white'}}>Jobfinder</div>
            
            <div style={{marginLeft:'70%',marginTop:'20px',color:'white'}}>Logout</div>
            <div style={{marginLeft:'20px',marginTop:'20px',color:'white'}}>Hello! Recruiter</div>
         
        </div>
       
        <div className="jobtitle" style={{display:'flex', flexDirection:'row',width: '1200px', height:'300px',background:'lightblue',marginLeft:'5%',marginTop:'20px'}}>
            <p style={{marginLeft:'40%'}}>position</p>
            <p>location type</p>
            <p>job type</p>
            <p>Company name</p>
        </div>
       <div style={{width: '1200px',background:'lightblue',marginLeft:'5%',marginTop:'20px'}}>
        <div className="details">
           <div style={{display:'flex', flexDirection:'row',marginTop:'30px',marginLeft:'20px'}}>
            <p>1w ago .</p>
            <p style={{marginLeft:'20px'}}>job type</p>
            <img src = "bluetile.png" style={{height:'30px',width:'30px',marginLeft:'20px'}}/>
            <p style={{marginLeft:'20px'}}>company</p></div><br/>
            <div style={{display:'flex', flexDirection:'row',marginTop:'30px',marginLeft:'20px'}}>
                <div>position</div>
                <div style={{marginLeft:'50%'}}><button type = "button" style={{background:'#ED5353',color:'white',height:'30px', width:'100px'}}>Apply Filter</button></div>
                </div>
            <p style={{color:'red',marginLeft:'20px'}}>Location</p><br/>
            <div style={{display:'flex', flexDirection:'row',marginLeft:'20px'}}>
            <div style={{display:'flex', flexDirection:'column'}}>
                <p>Salary</p><br/>
                <p>Rs 25000/Month</p>
            </div>
            <div style={{display:'flex', flexDirection:'column',marginLeft:'40px'}}>
            <p>Duration</p><br/>
            <p>6 Month</p>
            </div>
            </div>
        </div><br/>

        <div style={{marginLeft:'20px'}}>
                <span style={{fontSize:'30px'}}>About Company</span>
                <p>We provide technology-based services to help businesses and organizations achieve their
                 goals. We offer a wide range of services, including software development, system integration,
                 network and security services, cloud computing, and data analytics. Our primary focus is on 
                 leveraging technology to streamline business processes, improve productivity, and enhance overall 
                 efficiency.</p><br/>
                 <span style={{fontSize:'30px'}}>About job</span>
                <p>We are looking for a responsible PHP/WordPress/Laravel/Shopify Developer. 
                He/She will be liable for managing services and therefore the interchange of knowledge between 
                the server and the users. The candidate's primary focus is going to be the event of all server-side 
                logic, definition, and maintenance of the central database and ensuring high performance and responsiveness 
                to requests from the front end</p><br/>
                <span style={{fontSize:'30px'}}>Skills Required</span><br/>
                <button>Skills</button><br/><br/>
                <span style={{fontSize:'30px'}}>Additional Information</span>
                <p>Stipend structure: This is a performance-based internship. In addition to the minimum-assured
                 stipend, you will also be paid a performance-linked incentive (₹ 2500 per design).</p>
            </div>
        </div>
        </div>
        </>
    );
}
export default Mainpage;