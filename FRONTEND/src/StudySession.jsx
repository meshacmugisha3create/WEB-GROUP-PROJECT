import { Link } from "react-router-dom";  
function StudySession(){
  return(
    <div class = "session">
    <div class = "sessionBox">
      <div class = "ssesmy"></div>
      <div class = "sessionPytho">
        <p class = "session1"> STUDENTS GROUP FINDER </p>
        <p class = "session2">CREATE STUDY SESSION</p>
        <input class = "sessionDate"  type="text" placeholder = "Session Date" />
        <input class = "sessionTime"  type="text" placeholder = "Session Time" />
        <input class = "SessionLocation"  type="text" placeholder = "Location or meeting link" />
        <input class = "SessionDescription"  type="text" placeholder = "Brief Description of the session" />
    
        <button class = "sessionCreate">
          <p class = "SessWord">CREATE SESSION</p>
        </button>

      </div>
    </div>
    </div>
  );
}

export default StudySession;