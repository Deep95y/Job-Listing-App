
import {useEffect} from "react";
import axios from "axios";

const UserAdded = async ({ 
    CompanyName, 
    LogoUrl,
    Position,
    MonthlySalary,
    JobType,
    LocationType,
    JobLocation,
    JobDescription,
    AboutCompany,
    Skills,
    Information}) => {
    try{
        const AddJobLink = "http://localhost:5002/Jobs"; 
        const token = localStorage.getItem("token");
        // const token = localStorage.getItem("token");
        console.log(token);
        axios.defaults.headers.common["Authorization"] = token;
        const Response = await axios.post(AddJobLink, {
        CompanyName, 
        LogoUrl,
        Position,
        MonthlySalary,
        JobType,
        LocationType,
        JobLocation,
        JobDescription,
        AboutCompany,
        Skills,
        Information,
        refUserId: "_id" 
        });

        console.log("deep");
        console.log(Response);
    }catch(error) {
        console.log(error);
        alert("Something went wrong");//
    }
}

export default UserAdded;



