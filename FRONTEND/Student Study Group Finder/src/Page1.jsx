import { Link } from 'react-router-dom';

export default function Page1() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Student Study Group Finder</h1>
      <p>Collaborate with your classmates in real-time.</p>
      <Link to="/page2">
        <button style={{ padding: '10px 20px', cursor: 'pointer' }}>Get Started</button>
      </Link>
    </div>
  );
}