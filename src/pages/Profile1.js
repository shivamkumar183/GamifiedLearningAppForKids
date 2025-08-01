import React from "react";
import "../pages/GamePage.css"; 

const games = [
  { id: 1, name: "Emotion Identification", img: "/assets/emotionidentification.png", link: "/games/emotionidentify.html" },
  { id: 2, name: "Emotion Matching", img: "/assets/memory.png", link: "/games/emotionmatch.html" },
  { id: 3, name: "Pattern Matching", img: "/assets/patternmatching.png", link: "/games/patternmatching.html" },
  { id: 4, name: "Number Sequencing", img: "/assets/sequencing.png", link: "/games/sequencing.html" },
  
];

const GamePage = () => {
  const openGame = (gameLink) => {
    window.open(gameLink, "_blank"); 
  };

  return (
    <div className="game-container">
      <h2 className="game-title">Welcome to Fun World, Play and Learn!</h2>
      <div className="game-grid">
        {games.map((game) => (
          <div key={game.id} className="game-card" onClick={() => openGame(game.link)}>
            <img src={game.img} alt={game.name} className="game-image" />
            <div className="game-info">
              <h3>{game.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
