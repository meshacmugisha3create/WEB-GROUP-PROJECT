import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Page3() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // This looks at your Backend (Port 5000) to find the groups
    axios.get('http://localhost:5000/groups')
      .then(res => setGroups(res.data))
      .catch(err => console.error("Database connection failed:", err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Available Study Groups</h2>
      {groups.length === 0 ? (
        <p>No groups found. Go to Page 4 to create one!</p>
      ) : (
        groups.map(g => (
          <div key={g.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '15px', borderRadius: '8px' }}>
            <h3>{g.location}</h3>
            <p><strong>Topic:</strong> {g.description}</p>
            <small>Scheduled for: {g.date} at {g.time}</small>
          </div>
        ))
      )}
    </div>
  );
}