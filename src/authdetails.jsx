

//http://localhost:5002/getAlljobs

import axios from "axios";

const getJobdetail = async (filter) => {
    try{

        const RegLink = "http://localhost:5002/getAlljobs?Positiom="
           
        const RegResponse = await axios.post(RegLink);
        console.log(RegResponse.data);
    }catch(error) {
        console.log(error);
        alert("Something went wrong");
    }
}

export default getJobdetail;