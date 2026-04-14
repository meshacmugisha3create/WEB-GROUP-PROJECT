import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Register from "./Register"
import Dashboard from "./Dashboard"; 
import CreateGroup from "./CreateGroup";
import StudySession from "./StudySession";

function App(){
  return(

    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Login />} />
      <Route path = "/Register" element = {<Register />} />
      <Route path = "/Dashboard" element = {<Dashboard />} />
      <Route path = "/CreateGroup" element = {<CreateGroup />} />
      <Route path = "/StudySession" element = {<StudySession />} />
    </Routes>  
    </BrowserRouter>
  )
}

export default App; 