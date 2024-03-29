

//http://localhost:5002/getAlljobs

import axios from "axios";

const getJobdetail = async (filter) => {
    try{
        const RegLink = `http://localhost:5002/getAlljobs?Position=${filter?.title}&skills=${filter?.skills}`;
        const RegResponse = await axios.get(RegLink);
        return RegResponse.data;
        // console.log("deep");
        // console.log(RegResponse.data);
    }catch(error) {
        console.log(error);
        alert("Something went wrong");
    }
}

export default getJobdetail;