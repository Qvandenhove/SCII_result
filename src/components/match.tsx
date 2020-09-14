import React from 'react';
import './match.css';

interface ContainerProps {
  player1: string;
  player2: string;
  score: string;
}

const Match: React.FC<ContainerProps> = ({ player1, player2, score}) => {
  console.log(score)
  return (
    <div className="match">
      <p>{player1} vs {player2}</p>
      <p>{score}</p>
    </div>
  );
};

export default Match;
