import { useEffect, useState } from 'react';
import './App.scss';
import rock from './images/stone.png';
import spock from './images/spock.png';
import lizard from './images/lizard.png';
import paper from './images/paper.png';
import scissors from './images/scissors.png';

const App = () => {
  const [result, setResult] = useState('');
  const [myChoice, setMyChoice] = useState('');
  const [opponentChoice, setOpponentChoice] = useState('');

  const [score, setScore] = useState({
    totalGames: 0,
    wins: 0,
    losses: 0,
    draws: 0,
  });

  const newOpponentChoice = () => {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    setOpponentChoice(choices[Math.floor(Math.random() * choices.length)]);
  };

  const clickHandler = (myMove: string) => {
    setResult('');
    setMyChoice('');
    setOpponentChoice('');
    setMyChoice(myMove);
    newOpponentChoice();
    setScore({ ...score, totalGames: score.totalGames + 1 });
  };

  const gameResult = () => {
    if (myChoice === 'rock') {
      if (opponentChoice === 'rock') {
        setResult('draw');
      } else if (opponentChoice === 'paper') {
        setResult('loss');
      } else if (opponentChoice === 'scissors') {
        setResult('win');
      } else if (opponentChoice === 'lizard') {
        setResult('win');
      } else if (opponentChoice === 'spock') {
        setResult('loss');
      }
    } else if (myChoice === 'paper') {
      if (opponentChoice === 'rock') {
        setResult('win');
      } else if (opponentChoice === 'paper') {
        setResult('draw');
      } else if (opponentChoice === 'scissors') {
        setResult('loss');
      } else if (opponentChoice === 'lizard') {
        setResult('loss');
      } else if (opponentChoice === 'spock') {
        setResult('win');
      }
    } else if (myChoice === 'scissors') {
      if (opponentChoice === 'rock') {
        setResult('loss');
      } else if (opponentChoice === 'paper') {
        setResult('win');
      } else if (opponentChoice === 'scissors') {
        setResult('draw');
      } else if (opponentChoice === 'lizard') {
        setResult('win');
      } else if (opponentChoice === 'spock') {
        setResult('loss');
      }
    } else if (myChoice === 'lizard') {
      if (opponentChoice === 'rock') {
        setResult('loss');
      } else if (opponentChoice === 'paper') {
        setResult('win');
      } else if (opponentChoice === 'scissors') {
        setResult('loss');
      } else if (opponentChoice === 'lizard') {
        setResult('draw');
      } else if (opponentChoice === 'spock') {
        setResult('win');
      }
    } else if (myChoice === 'spock') {
      if (opponentChoice === 'rock') {
        setResult('win');
      } else if (opponentChoice === 'paper') {
        setResult('loss');
      } else if (opponentChoice === 'scissors') {
        setResult('win');
      } else if (opponentChoice === 'lizard') {
        setResult('loss');
      } else if (opponentChoice === 'spock') {
        setResult('draw');
      }
    }
  };

  const calculateScore = () => {
    if (result === 'win') {
      setScore({ ...score, wins: score.wins + 1 });
    } else if (result === 'loss') {
      setScore({ ...score, losses: score.losses + 1 });
    } else if (result === 'draw') {
      setScore({ ...score, draws: score.draws + 1 });
    }
  };

  useEffect(() => {
    gameResult();
  }, [myChoice, opponentChoice, score]);

  useEffect(() => {
    calculateScore();
  }, [result]);

  return (
    <div className="container cotainer-fluid">
      <div className="row center-xs">
        <div className="col-xs-12">
          <h1 className="game__title">Rock, Paper, Scissors, Lizard, Spock</h1>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-12">
          <h3 className="game__sub-title">Make Your move</h3>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-10">
          <div className="game__choose-weapon-container">
            <button
              onClick={(() => {
                clickHandler('rock');
              })}
              className="game__choose-weapon"
            >
              <img src={rock} alt="rock" />

            </button>
            <button
              onClick={(() => {
                clickHandler('paper');
              })}
              className="game__choose-weapon"
            >
              <img src={paper} alt="paper" />

            </button>
            <button
              onClick={(() => {
                clickHandler('scissors');
              })}
              className="game__choose-weapon"
            >
              <img src={scissors} alt="scissors" />

            </button>
            <button
              onClick={(() => {
                clickHandler('lizard');
              })}
              className="game__choose-weapon"
            >
              <img src={lizard} alt="lizard" />

            </button>
            <button
              onClick={(() => {
                clickHandler('spock');
              })}
              className="game__choose-weapon"
            >
              <img src={spock} alt="spock" />

            </button>
          </div>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-3">
          <div>
            <h3 className="game__game-title">Game</h3>
            <p>
              Your Choice:
              {' '}
              {myChoice}
            </p>
            <p>
              Opponents Choice:
              {' '}
              {opponentChoice}
            </p>
            <p>
              Status:
              {' '}
              {result}
            </p>
          </div>
        </div>
        <div className="col-xs-3">
          <div>
            <h3 className="game__score-title">Score</h3>
            <p>
              Total Games:
              {' '}
              {score.totalGames}
            </p>
            <p>
              Wins:
              {' '}
              {score.wins}
            </p>
            <p>
              Losses:
              {' '}
              {score.losses}
            </p>
            <p>
              Draws:
              {' '}
              {score.draws}
            </p>
            {score.totalGames === 0 && (
              <p>
                Win Rate: 0 %
              </p>
            )}
            {score.totalGames > 0 && (
              <p>
                Win Rate:
                {' '}
                {((score.wins / score.totalGames) * 100).toFixed(1)}
                {' '}
                %
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
