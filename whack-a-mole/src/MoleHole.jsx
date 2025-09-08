import React, {useState, useEffect} from "react";
import {Mole} from './Mole.jsx';

import './molehole.css';

const chanceToAppear = 0.7;

const moleTimeoutMS = 700;

let randomizedChance = () => {
    return Math.random() > chanceToAppear;
}

export const MoleHole = ({setScore}) => {

    /*Destructuring useState.*/
    const [isVisible, setVisibility] = useState(false);

    useEffect(() => {

        /*Repeatedly calls the function 'setVisibility'
        with an interval of 'moleTimeoutMS',
        IF 'randomizedChance' is true.*/
        const interval = setInterval(() => {

            setVisibility(randomizedChance);

            }, moleTimeoutMS);

        return () => clearInterval(interval);

    }, []);

    const handleWhack = () => {
        if (!isVisible) return;

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