import React, {useEffect} from 'react';

//The empty array means 'Run this effect only once.'
export function ComponentZero () {
    useEffect(() => {
        console.log("Component mounted!");
    }, []);

    return (<p>Hello world!</p>);
}


export function ComponentOne (count) {

    //Runs every time 'count' changes.
    useEffect(() => {
        console.log(`Count changed to ${count}.`);
    }, [count]);
}



