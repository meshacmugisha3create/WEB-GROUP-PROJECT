import { Link } from "react-router-dom"; 

function Register(){ 
  return( 
  <div class = "covImage1"> 
  <div class = "myBox1"> 
    <div class = "my1"></div> 
    <div class = "pytho1"> <p class = "grp1"> STUDENTS GROUP FINDER <br />REGISTER </p> 
    <input class = "firstName" type="text" placeholder = "Enter your First Name" /> 
    <input class = "secondName" type="text" placeholder = "Enter your Second Name" /> 
    <input class = "program" type="text" placeholder = "Enter your Program of Study" /> 
    <input class = "year" type="text" placeholder = "Enter your Year of Study" /> 
    <input class = "username1" type="text" placeholder = "Enter your username" /> 
    <input class = "email1" type="text" placeholder = "Enter your Email" /> 
    <input class = "password1" type="text" placeholder = "Enter your Password" />
    
    <Link to ="/Dashboard"> 
    <button class = "reg1"> 
      <p class = "word1">REGISTER</p> 
    </button> 
    </Link> 
    </div> 
    </div> 
    </div> 
    ); 
  } 
  export default Register;