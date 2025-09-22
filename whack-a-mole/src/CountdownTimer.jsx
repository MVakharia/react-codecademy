import {useState, useEffect} from "react";

let startingNumber = 30;

export function CountdownTimer () {
    const [count, setCount] = useState(startingNumber);

    useEffect (() => {

        const interval = setInterval(() => {
            if(count > 0) {
                setCount(previousNumber => previousNumber - 1);
            }
        }, 1000);

        return () => clearInterval(interval);

    }, [count]);

    return (
        <div>
            {count}
        </div>
    )

}