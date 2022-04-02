import React from 'react';

function Header(props) {
    const { score, highScore } = props;

    return (
        <header className="header">
            <h1 className="main-title">Memory Game</h1>
            <div className="scoreboard">
                <p className="current-score">Current Score: {score}</p>
                <p className="high-score">High Score: {highScore}</p>
            </div>
        </header>
    );
}

export default Header;