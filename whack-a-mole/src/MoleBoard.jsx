import {MoleHole} from "./MoleHole.jsx";

const cells = 9;

export function MoleBoard (setScore) {
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