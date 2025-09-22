import React, {useState, useEffect} from "react";
import {Mole} from './Mole.jsx';

import './molehole.css';

const chanceToAppear = 0.7;

const moleTimeoutMS = 700;

//This is a boolean function that returns 'true' if a randomly generated number is greater than the chance to appear.
let randomizedChance = () => { return Math.random() > chanceToAppear; }

//A hole that a mole will appear from. It generates moles.
export const MoleHole = ({setScore}) => {

    /*Destructuring useState into a variable and a function that represent and change the visibility of each mole.*/
    const [isVisible, setVisibility] = useState(false);

    //The effect hook. Sets up the mole hole's behaviour on game start.
    useEffect(() => {

        /*IF 'randomizedChance' is true, this repeatedly calls the function 'setVisibility'
        with an interval of 'moleTimeoutMS'.*/
        const interval = setInterval(() => {

            setVisibility(randomizedChance);

            }, moleTimeoutMS);

        return () => clearInterval(interval);

    },
        //This empty array ensures that the useEffect() only runs once when the component mounts.
        []);


    const handleWhack = () => {
        //If there is no mole in the square, do nothing.
        if (!isVisible) return;

        //Otherwise, increment the score by 1 and make the mole visible.
        setScore(prev => prev + 1);
        setVisibility(false);

    };

    //When a mole hole is clicked, run the 'handleWhack' function.
    //If 'isVisible' is true, create a Mole.
    return (
        <div onClick={handleWhack} id={'molehole'}>
            {isVisible && <Mole/>}
        </div>
    );
}