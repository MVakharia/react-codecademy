import React, {useState} from "react";
import './App.css';

import {MoleBoard} from "./MoleBoard.jsx";
import {CounterTimer} from "./CounterTimer.jsx";
import {CountdownTimer} from "./CountdownTimer.jsx";

const styles = {
    h1: {
        textAlign:'center'
    }
};

export const App = () => {
    const [score, setScore] = useState(0);

    return (
        <div className="App">
            <h1 style={styles.h1}>React games and applications</h1>

            <h2>Whack-A-Mole</h2>

            <h3>Score: {score}</h3>

            {MoleBoard(setScore)}

            <h2>Basic counter timer</h2>

            {CounterTimer()}

            <h2>Basic countdown timer</h2>

            {CountdownTimer()}

        </div>
    )
}