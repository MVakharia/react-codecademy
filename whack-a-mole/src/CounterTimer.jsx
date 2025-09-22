import {useState, useEffect} from "react";

export function CounterTimer () {
    const [count, setCount] = useState(0);

    useEffect (() => {
        const interval = setInterval(() => {
            setCount(previousNumber => previousNumber + 1);
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}