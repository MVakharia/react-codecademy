//React uses keys internally to keep track of lists.
//If you don't use keys when you're supposed to,
// React may accidentally scramble your list items into the wrong order.
const keysExample = (
    <ul>
        <li key="li-00">Example0</li>
        <li key="li-01">Example1</li>
        <li key="li-02">Example2</li>
    </ul>
);

//______________

//A React list needs keys if either of the following are true:

//The list items have 'memory' from one render to the next:
//for instance, when a to-do list renders,
// each item must 'remember' whether it was checked off.

//OR

//A list's order might be shuffled - for example, search results being shuffled from one render to the next.

//______________

//If you're unsure if either of the above are true, it doesn't hurt to use keys.

