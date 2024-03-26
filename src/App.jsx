import React from "react";
import Register from './register';
import Login from './login';
import Addjob from './addjob';
import Mainpage from './mainpage';
import Homepage from './homepg';
import {Routes, Route, BrowserRouter} from 'react-router-dom';


const App = () => {
    return (
      <>
         <main>
  <BrowserRouter>
  <Routes>
    <Route path ="/" element ={<Register/>}/>
    <Route path ="/register" element ={<Register/>}/>
    <Route path ="/login" element ={<Login/>}/>
    <Route path ="/addjob" element ={<Addjob addSkills={addSkills} removeSkills = {removeSkills} formvalue = {formvalue}/>}/>
    <Route path ="/mainpage" element ={<Mainpage/>}/>
    <Route path ="/homepg" element ={<Homepage/>}/>
    <Route path ="." element ={<h1>404 Route not found</h1>}/>
  </Routes> 
  </BrowserRouter>
  </main>


     {/* <Register/> */}
     {/* <Login/> */}
     {/* <Addjob/> */}
     {/* <Mainpage/> */}
      </>
    );
}
export default App;