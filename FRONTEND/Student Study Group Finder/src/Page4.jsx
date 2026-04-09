import { useState } from 'react';
import './Page4.css';

export default function Page4() {
  const [output, setOutput] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date: e.target.date.value,
      time: e.target.time.value,
      location: e.target.location.value,
      description: e.target.description.value,
    };
    setOutput(formData);
    e.target.reset();
  };

  return (
    <div className="container">
      <h2>Create Study Group</h2>
      <form onSubmit={handleSubmit}>
        <input name="date" type="date" required />
        <input name="time" type="time" required />
        <input name="location" placeholder="Location" required />
        <textarea name="description" placeholder="Description"></textarea>
        <button type="submit">Submit</button>
      </form>

      {output && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>Group Preview:</h3>
          <p><strong>Date:</strong> {output.date}</p>
          <p><strong>Time:</strong> {output.time}</p>
          <p><strong>Location:</strong> {output.location}</p>
          <p><strong>Description:</strong> {output.description}</p>
        </div>
      )}
    </div>
  );
}