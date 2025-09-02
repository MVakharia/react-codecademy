import React, {useState} from "react";

export function Toggle () {

    //Destructures 'useState()' into the value and the function that it returns,
    //so that we can use that value and that function within this function component.
    const [toggle, setToggle] = useState();

    return (
        <div>
            <p>The toggle is {toggle}</p>

            <button onClick={() => setToggle("On")}>On</button>

            <button onClick={() => setToggle("Off")}>Off</button>
        </div>
    );
}
/*
export function BadToggle () {
    //'toggle' is a value.
    //'setToggle' is the function we use to change, or update, the value.
    const [toggle, setToggle] = useState();

    //Since 'setToggle()' is not called in a parameterless arrow function,
    // it will be called on render instead of on click.
    //We don't want it to call on render, we want it to call on click.
    return(
        <div>
            <p>The switch is in the {toggle} state.</p>

            <button onClick={setToggle("On")}></button>

            <button onClick={setToggle("Off")}></button>
        </div>
    )
}
*/

export function NameDisplay() {
    //Your name will be the initial state of 'name'.
    //We're not using 'setName' in this first function.
    const [name, setName] = useState("Michael");

    return <p>Your name is: {name}</p>;
}

export function ToggleText() {
    const [text, setText] = useState("Hello");

    return (
        <div>
            <p>{`${text} World!`}</p>
            <button onClick={() => {
                if (text === "Hello") {
                    setText("Goodbye");
                } else {
                    setText("Hello");
                }
            }
            }
            >Change Text
            </button>

        </div>
    );
}

export function ClickCounter () {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Clicked: {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me!</button>
        </div>
    );
}

export function LiveInput() {
    const [input, setInput] = useState("");

    //
    return (
      <div>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

          <p>You typed: {input}</p>
      </div>
    );
}

export function EmailTextInput () {
    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        const updatedEmail = event.target.value;
        setEmail(updatedEmail);
    }

    return(
      <input value={email} onChange={handleChange} />
    );
}

export function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prevCount => prevCount + 1);

    return (
        <div>
            <p>Wow, you've clicked that button {count} times!</p>

            <button onClick={increment}>Click here!</button>
        </div>
    )
}


