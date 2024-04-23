import React, { useState, useEffect } from 'react';
import {db} from '../../firebase';
import {uid} from 'uid';
import { collection, doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";




function DpiConverter() {
    const [games, setGames] = useState([]);
  const [fromGame, setFromGame] = useState('');
  const [toGame, setToGame] = useState('');
  const [multiplier, setMultiplier] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetchData is being called');
      const gamesRef = ref(db, "Games");
      
      onValue(gamesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setGames(Object.values(data));
        }
      }, (error) => {
        console.error('Error fetching data:', error);
      });
    };
  
    fetchData();
  }, []);

  
  useEffect(() => {
    if (fromGame && toGame) {
      const game = games.find(game => game.VonGame === fromGame && game.ZuGame === toGame);
      setMultiplier(game ? game.Multiplikator : null);
    }
  }, [fromGame, toGame, games]);

  console.log(games)

    return ( 
        <div style={{ color: '#e6e8db' }}>
            <h1>Willkommen bei GameTools!</h1>
            <p>Dies ist die DPI Converter.</p>

            <select value={fromGame} onChange={e => setFromGame(e.target.value)}>
                <option value="">Wählen Sie das VonGame</option>
                {games.map(game => <option key={game.CalculationID} value={game.VonGame}>{game.VonGame}</option>)}
            </select>
            <select value={toGame} onChange={e => setToGame(e.target.value)}>
            <option value="">Wählen Sie das ZuGame</option>
            {games.map(game => <option key={game.CalculationID} value={game.ZuGame}>{game.ZuGame}</option>)}
            </select>
            {multiplier !== null && <p>Multiplier: {multiplier}</p>}
        </div>
);
}

export default DpiConverter;

 