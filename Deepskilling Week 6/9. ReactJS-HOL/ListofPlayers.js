import React from 'react';

export function ListofPlayers({ players }) {
  return (
    <div>
      <ul>
        {players.map((item, index) => (
          <div key={index}>
            <li>Mr. {item.name} <span>{item.score}</span></li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export function Scorebelow70({ players }) {
  const players70 = players.filter((item) => item.score <= 70);

  return (
    <div>
      <ul>
        {players70.map((item, index) => (
          <div key={index}>
            <li>Mr. {item.name} <span>{item.score}</span></li>
          </div>
        ))}
      </ul>
    </div>
  );
}
