import { Link } from "react-router-dom"; 
function Login(){ 
  return( 
  <div class = "covImage"> 
  <div class = "myBox"> 
    <div class = "my"></div> 
    <div class = "pytho"> 
      <p class = "grp"> STUDENTS STUDY GROUP FINDER</p> 
      <p class = "grpNew">LOGIN PLEASE</p> 
      <input class = "username" type="text" placeholder = "Enter your username" /> 
      <input class = "email" type="text" placeholder = "Enter your Email" /> 
      <input class = "password" type="text" placeholder = "Enter your Password" /> 
      <button class = "login"> 
        <p class = "word">LOGIN</p> 
      </button> <Link to ="/Register"> 
      <button class = "Register"> 
        <p class = "word" >REGISTER</p> 
      </button> 
      
      </Link> 
      </div> 
      </div> 
      </div> 
      ); 
    } 
    export default Login;