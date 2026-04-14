import { Link } from "react-router-dom"; 
function CreateGroup(){
  return(
    <div class = "group">
    <div class = "groupBox">
      <div class = "grupmy"></div>
      <div class = "groupPytho">
        <p class = "group1"> STUDENTS GROUP FINDER </p>
        <p class = "group2">CREATE GROUP</p>
        <input class = "groupName"  type="text" placeholder = "Enter your Group Name" />
        <input class = "groupCourse"  type="text" placeholder = "Course Name or Code" />
        <input class = "groupDescription"  type="text" placeholder = "Short description of the study focus" />
        <input class = "meetingPlace"  type="text" placeholder = "Meeting Location (Physical or Online)" />

        <button class = "createButton">
          <p class = "createWord" align = "center">CREATE GROUP</p>
        </button>

      </div>
    </div>
    </div>
  );
}

export default CreateGroup;