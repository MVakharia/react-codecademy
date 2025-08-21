import React from "react";

//This is actually a call to 'React.createElement()'.
//JSX expressions are actually just syntactic sugar for 'React.createElement()'.
const h1Example0 = (<h1>Hello world</h1>);

//The same as Example0, but uses the 'createElement' function within the React namespace.
const h1Example1 = React.createElement(
    "h1", null, "Hello world"
);



