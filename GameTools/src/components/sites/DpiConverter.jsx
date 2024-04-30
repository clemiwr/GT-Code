import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import {db} from '../../firebase';
import { Switcher } from '../Icons';
import '../../style/Dpiconverter.css';

function DpiConverter() {
    const [games, setGames] = useState([]);
    const [fromGameMultiplier, setFromGameMultiplier] = useState(0);
    const [toGameMultiplier, setToGameMultiplier] = useState(0);
    const [sensitivity, setSensitivity] = useState(0);
    const [result, setResult] = useState(0);
    const [fromGame, setFromGame] = useState(""); // New state variable
    const [toGame, setToGame] = useState(""); // New state variable
    const [inputSensitivity, setInputSensitivity] = useState(""); // New state variable

    useEffect(() => {
        const gamesRef = ref(db, 'Games');
        onValue(gamesRef, (snapshot) => {
            const data = snapshot.val();
            setGames(Object.values(data));
        });
    }, []);

    useEffect(() => {
        calculateResult();
    }, [fromGameMultiplier, toGameMultiplier, sensitivity]);

    const handleFromGameChange = (e) => {
        setFromGame(e.target.value); // Update selected game
        if (e.target.value === "") {
            setFromGameMultiplier(0);
        } else {
            const selectedGame = games.find(game => game.GameName === e.target.value);
            setFromGameMultiplier(selectedGame.Multiplikator);
        }
    };
    
    const handleToGameChange = (e) => {
        setToGame(e.target.value); // Update selected game
        if (e.target.value === "") {
            setToGameMultiplier(0);
        } else {
            const selectedGame = games.find(game => game.GameName === e.target.value);
            setToGameMultiplier(selectedGame.Multiplikator);
        }
    };

    const handleSensitivityChange = (e) => {
        setSensitivity(e.target.value);
        setInputSensitivity(e.target.value); // Update input sensitivity
    };

    const calculateResult = () => {
        let tmpMult = sensitivity / fromGameMultiplier;
        let result = tmpMult * toGameMultiplier;
        setResult(result);
    };

    // New function to handle switch click
    const handleSwitchClick = () => {
        const tempMultiplier = fromGameMultiplier;
        setFromGameMultiplier(toGameMultiplier);
        setToGameMultiplier(tempMultiplier);

        const tempGame = fromGame; // Switch selected games
        setFromGame(toGame);
        setToGame(tempGame);
    };

    return ( 
      <div className="dpi-converter">
            <h1 className="title">DPI Converter</h1>
            <p className="description">Lorem ipsum dolor sit amet consectetur.</p>
            <div>
            <div className="game-select-container">
                <select className="game-select" value={fromGame} onChange={handleFromGameChange}>
                    <option value="">From Game</option>
                    {games.map(game => <option key={game.CalculationID} value={game.GameName}>{game.GameName}</option>)}
                </select>
                <button className="switch-button" onClick={handleSwitchClick}>< Switcher /></button>
                <select className="game-select" value={toGame} onChange={handleToGameChange}>
                    <option value="">To Game</option>
                    {games.map(game => <option key={game.CalculationID} value={game.GameName}>{game.GameName}</option>)}
                </select>
            </div>
            <input className="sensitivity-input" type="number" placeholder='From Sensitivity' value={inputSensitivity} min={0} onChange={handleSensitivityChange} />
            <input className="result-input" type="number" value={result.toFixed(3)} disabled/>
            </div>
            
      </div>
    );
}

export default DpiConverter;