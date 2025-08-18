import React from 'react';
import { createRoot } from 'react-dom/client';

// Write code here:

const container = document.getElementById('container');

//creates a React root at the specified DOM element.
const root = createRoot(container);

//can be used to render JSX on the screen.
root.render(<h1>Hello world</h1>);

const toDoList = (
    <ol>
        <li>Learn React</li>
        <li>Become A Developer</li>
    </ol>
);

const container0 = document.getElementById('app');

const root0 = createRoot(container0);

root0.render(toDoList);

const myList = (<ul>
    <li>How</li>
    <li>To</li>
    <li>Code</li>
</ul>);

root0.render(myList);

const hello = (<h1>Hello world</h1>);

//This will add 'Hello world' to the screen.
root.render(hello);

//This won't do anything,
// as the 'render' method only updates DOM elements that have changed using the virtual DOM.
root.render(hello);

//In JSX, you must use the 'className' attribute instead of the 'class' attribute.
//'class' is a reserved word in JavaScript.
//'className' will be converted to 'class'.
const titleExample = (<h1 className="big">Title</h1>);

const myDiv = (<div className="big">I AM A BIG DIV</div>);

root.render(myDiv);

//In JSX, all element variables must have closing tags,
// and all self-closing elements must have a slash to close them.

//For example, in this line break you MUST include the slash, like so.
//If you don't, then any code written after this line will not work.
const lineBreak = <br />;

root.render(<h1>2 + 3</h1>);

root.render(<h1>{2 + 3}</h1>);

const math = (<h1>2 + 3 = {2 + 3}</h1>);

root.render(math);

const name = 'Michael';

//Access the 'name' variable inside a JSX expression.
// You don't even need backticks for this!
const greeting = (<p>Hello, {name}!</p>);

root.render(<h1>{name}</h1>);






