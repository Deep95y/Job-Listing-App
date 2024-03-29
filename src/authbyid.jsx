



import axios from "axios";

const getJobdetailbtid = async (id) => {
    try{

        const RegLink = `http://localhost:5002/getJobById?id=${id}`;
           
        const RegResponse = await axios.get(RegLink);

        console.log("deep");
        return RegResponse.data;
        console.log(RegResponse.data);
    }catch(error) {
        console.log(error);
        alert("Something went wrong");
    }
}

export default getJobdetailbtid;