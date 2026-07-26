import React from 'react';
import './App.css';
import { ListofPlayers, Scorebelow70 } from './ListofPlayers';
import { IndianPlayers, OddPlayers, EvenPlayers, ListofIndianPlayers } from './IndianPlayers';

function App() {
  // Declare an array with 11 players and their scores
  const players = [
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 65 },
    { name: 'MS Dhoni', score: 45 },
    { name: 'Sachin Tendulkar', score: 95 },
    { name: 'Rahul Dravid', score: 68 },
    { name: 'Jasprit Bumrah', score: 25 },
    { name: 'Ravindra Jadeja', score: 55 },
    { name: 'Rishabh Pant', score: 72 },
    { name: 'Hardik Pandya', score: 60 },
    { name: 'Shikhar Dhawan', score: 78 },
    { name: 'Mohammed Shami', score: 15 }
  ];

  // Change flag value to true or false to test both views
  var flag = true;

  if (flag === true) {
    return (
      <div style={{ padding: '20px' }}>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div style={{ padding: '20px' }}>
        <div>
          <h1>Indian Team</h1>
          <h1>Odd Players</h1>
          <OddPlayers IndianTeam={IndianPlayers} />
          <hr />
          <h1>Even Players</h1>
          <EvenPlayers IndianTeam={IndianPlayers} />
        </div>
        <hr />
        <div>
          <h1>List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
      </div>
    );
  }
}

export default App;
