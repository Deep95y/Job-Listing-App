import axios from "axios";

const UserLogin = async ({Email, Password}) => {
    try{
        const LogLink = "http://localhost:5000/login";
        const LogResponse = await axios.post(LogLink, {
            Email, 
            Password,
        });
        localStorage.setItem("token", LogResponse.data.jwToken);
        console.log(token);
        //console.log(LogResponse.data);
        return LogResponse.data.status;
    }catch(error) {
        console.log(error);
        alert("Something went wrong");
    }
}

export default UserLogin;