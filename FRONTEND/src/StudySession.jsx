// Study session creation component
import { useState } from "react";
import axios from "axios";

function StudySession() {
  // State to store study session form data
  const [form, setForm] = useState({
    date: "",
    time: "",
    location: "",
    description: ""
  });

  // Handle form submission to create a new study session
  const handleSubmit = async () => {
    try {
      // Send session data to the server
      await axios.post("http://localhost:5000/sessions", form);
      alert("Session created!");

      // Clear the form after successful submission
      setForm({
        date: "",
        time: "",
        location: "",
        description: ""
      });
    } catch (err) {
      console.error(err);
      alert("Error creating session");
    }
  };

  // Render study session creation form
  return (
    <div className="session">
      <div className="sessionBox">
        <div className="sessionPytho">
          {/* Application title */}
          <p className="session1">STUDENTS GROUP FINDER</p>
          {/* Form title */}
          <p className="session2">CREATE STUDY SESSION</p>

          {/* Date input field */}
          <input
            type="date"
            value={form.date}
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
          />

          {/* Time input field */}
          <input
            type="time"
            value={form.time}
            onChange={(e) =>
              setForm({ ...form, time: e.target.value })
            }
          />

          {/* Location or meeting link input */}
          <input
            type="text"
            placeholder="Location or meeting link"
            value={form.location}
            onChange={(e) =>
              setForm({ ...form, location: e.target.value })
            }
          />

          {/* Session description input */}
          <input
            type="text"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          {/* Submit button to create the session */}
          <button onClick={handleSubmit}>
            CREATE SESSION
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudySession;
