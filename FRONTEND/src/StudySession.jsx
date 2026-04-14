import { useState } from "react";
import axios from "axios";

function StudySession() {
  const [form, setForm] = useState({
    date: "",
    time: "",
    location: "",
    description: ""
  });

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/sessions", form);
      alert("Session created!");

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

  return (
    <div className="session">
      <div className="sessionBox">
        <div className="sessionPytho">
          <p className="session1">STUDENTS GROUP FINDER</p>
          <p className="session2">CREATE STUDY SESSION</p>

          <input
            type="date"
            value={form.date}
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
          />

          <input
            type="time"
            value={form.time}
            onChange={(e) =>
              setForm({ ...form, time: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Location or meeting link"
            value={form.location}
            onChange={(e) =>
              setForm({ ...form, location: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <button onClick={handleSubmit}>
            CREATE SESSION
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudySession;
