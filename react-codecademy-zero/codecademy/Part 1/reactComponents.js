import React from 'react';

import ReactDOM from 'react-dom/client';

//Creates a new React component.
function MyComponent () {
    return <h1>Hello world</h1>;
}

//Renders the new React component.
ReactDOM.createRoot(document.getElementById('app').render(<MyComponent />));

