import React from "react";
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  const root = {
    height: '100vh',
    background: 'lightblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    
  };
  const header = {
   
  }
  return (
    <div style={root}>
      <span>
        <h2 style={header}>404: Page Not Found</h2>
        <br />
        <p>
          Go Back To{" "}
          <Link to="/" style={{ color: "black", fontWeight: 'bold' }}>
            Home Page
          </Link>
        </p>
      </span>
    </div>
  );
}
