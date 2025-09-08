import React, {useState} from "react";
import './App.css';

import {MoleHole} from "./MoleHole.jsx";

const cells = 9;

function MoleBoard (setScore) {
    const holes = Array.from({length: cells});

    console.log(holes);

    return (
        <div id="mole-board">

            {/*
                For each item in the array 'holes', render a 'MoleHole' component.
                'key={index}' gives an index number to each MoleHole.
                'setScore={setScore}' allows MoleHole to use the 'setScore'
                function that is destructured in the App() function.
            */}

            {holes.map((_, index) => (
                <MoleHole key={index} setScore={setScore} />
            ))}
        </div>
    )
}

export const App = () => {
    const [score, setScore] = useState(0);

    return (
        <div className="App">
            <h1>Whack-A-Mole</h1>
            <h2>Score: {score}</h2>

            {MoleBoard(setScore)}
        </div>
    )
}

