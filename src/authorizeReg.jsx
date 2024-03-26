import axios from "axios";

const UserRegistered = async ({Name, Email, Password, Mobile}) => {
    try{
        const RegLink = "http://localhost:5000/signup";
        const RegResponse = await axios.post(RegLink, {
            Name,
            Email, 
            Password,
            Mobile
        });
        console.log(RegResponse.data);
    }catch(error) {
        console.log(error);
        alert("Something went wrong");
    }
}

export default UserRegistered;