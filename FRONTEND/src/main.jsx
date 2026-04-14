// This is the entry point of the application
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // Import the CSS styles for the app

// Render the main App component into the root HTML element
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)