import { Link } from "react-router-dom";

function Dashboard(){
  return(
    <div class = "covImage2">
    <div class = "myBox2">
      <div class = "my2"></div>
      <p class = "grp2"> STUDENTS STUDY GROUP FINDER</p>
      <div class = "pytho2">
        
        <button class = "MenuBar1">
          <p class = "menu1">STUDY GROUPS</p>
        </button>

        <Link to = "/CreateGroup"> 
        <button class = "MenuBar2">
          <p class = "menu2" >CREATE STUDY GROUP</p>
        </button>
        </Link>
        

        <button class = "MenuBar3">
          <p class = "menu3" align = "center">PROFILE</p>
        </button>
        
        <Link to = "/StudySession"> 
        <button class = "MenuBar4">
          <p class = "menu4" align = "center">STUDY SESSION</p>
        </button>
        </Link>

        <Link to = "/">
        <button class = "MenuBar5">
          <p class = "menu5" align = "center">LOG OUT</p>
        </button>
        </Link>


      </div>
      <div class = "myBox22"></div>
    </div>
    </div>
  );
}

export default Dashboard;