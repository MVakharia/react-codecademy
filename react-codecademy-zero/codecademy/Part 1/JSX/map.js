const strings = ['Home', 'Shop', 'About Me'];

//Takes the string array and turns every item in the array into a list item,
//then returns the list items as an array.
const listItems = strings.map(string => <li>{string}</li>);

const list = (<ul>{listItems}</ul>);





