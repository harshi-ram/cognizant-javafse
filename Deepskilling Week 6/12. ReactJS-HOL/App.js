import React, { useState } from 'react';
import './App.css';

function FlightDetails() {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Available Flights</h2>
      <ul>
        <li>Flight 101: New York to London - $500</li>
        <li>Flight 202: Paris to Tokyo - $750</li>
        <li>Flight 303: Sydney to Singapore - $420</li>
      </ul>
    </div>
  );
}

function TicketBooking() {
  return (
    <div style={{ padding: '20px', border: '1px solid green', margin: '10px', backgroundColor: '#e8f5e9' }}>
      <h2>Ticket Booking Portal</h2>
      <p>Select your flight and enter passenger details to book your ticket.</p>
      <button onClick={() => alert('Ticket booked successfully!')}>Confirm Booking</button>
    </div>
  );
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  let pageContent;

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
    pageContent = (
      <div>
        <h2>Welcome to the User Page</h2>
        <TicketBooking />
      </div>
    );
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
    pageContent = (
      <div>
        <h2>Welcome to the Guest Page</h2>
        <p>Please log in to book your flight tickets.</p>
      </div>
    );
  }

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Ticket Booking App</h1>
      
      <div style={{ margin: '20px' }}>
        {button}
      </div>

      <div style={{ margin: '20px' }}>
        {pageContent}
      </div>

      <FlightDetails />
    </div>
  );
}

export default App;
