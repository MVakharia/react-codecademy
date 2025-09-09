# React projects

### A repository for React projects I've completed as part of the Full-Stack Engineer course on Codecademy and in my spare time. 

## Rules

-  React function components should never directly update their props.
-  A presentational component has only one job: to display a component.
-  An initialization of ```state``` using the ```useState``` hook is a necessary part of any 'stateful' component.

## Further reading

- https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components

## Study topics list

### useState and useEffect

- Separate hooks for separate effects. Separation of concerns: make sure that you use one useEffect() per useState(), and if a single useEffect is handling an object with multiple unrelated key-value pairs, split the useEffect into multiple useEffects.
- Write an effect that manages a timer.
- Write an effect that manipulates the DOM.
- Write an effect that fetches data from a server (and another for fetching from an API).
- Write a cleanup function into an effect.
- Look up what it means to mount and unmount a function component.
- Write an effect with an empty dependency array as the second argument, and observe the outcome. An empty dependency array signals to React that the effect need only be called once. 
- Do the same but with an populated dependency array, and then the same again with an undefined dependency array. 
- The difference between ```increment(num + 1)``` and ```increment((prev) => prev + 1)```.
- The second argument passed to useEffect is used to decide when, and how many times, React calls our effect.
- Spread syntax (...)
- Build the Passing Thoughts application off-platform using this tutorial: https://www.youtube.com/watch?v=_FuKzvavcAI.

### Programming Patterns

- Using object destructuring to extract props in a functional component.
- Pass a change handler function as a prop.
- Build the 'Cute Guinea Pigs' React application (https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-react-part-ii/modules/wdcp-22-react-programming-patterns/lessons/react-programming-patterns/exercises/reactive-programming-patterns-review) off-platform, refactor and annotate it, and create your own version from scratch.
- Pass arguments to an event handler in a component when a button is clicked.
- Build the 'Video Player' application (https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-react-part-ii/modules/wdcp-22-react-programming-patterns/projects/video-player) off-platform, refactory and annotate it, and create your own version from scratch.

### Styling React Apps

- The double curly braces of an inline style and what the outer and inner curly braces mean.
- Storing a style object in a JavaScript variable and injecting the object into JSX, instead of placing the styles in a CSS file and importing the CSS file. 
    - This will allow you to include small amounts of styling within the JSX files that require those styles, instead of using dedicated stylesheets.
- CSS modules and importing CSS as a module with ```fileName.module.css```, ```import styles from './fileName.module.css'```, and ```<div className={styles.divStyle}></div>```.
- In React, a style value of type ```number``` is automatically interpreted with ```px```. For example, ```fontSize: 20``` is interpreted as ```font-size: 20px``` when the JS is converted to CSS.
- Complete the extra credit exercise, 'Bread First Search', at https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-react-part-ii/modules/wdcp-22-intermediate-react/lessons/react-style/exercises/review, off-platform, then refactor it, annotate it, and extend it. 
- Complete the exercise 'Styling Rock, Paper, Scissors' at https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-react-part-ii/modules/wdcp-22-intermediate-react/projects/styling-rock-paper-scissors off-platform, then refactor it, annotate it, and extend it. 

### React Forms

- The difference between React forms and HTML forms.
- How the onChange event triggers updates in a React form, such as when characters are entered or deleted.
- Adding an input event handler to a form.
- An ```Input``` function component that makes use of ```const [userInput, setUserInput] = useState('');``` and a function named ```handleUserInput```.
- Write a form that show the user their input as they write it.
- Controlled components and uncontrolled components, and the difference between them.
- When you give an ```<input>``` element a ```value``` attribute, the ```<input>``` element becomes controlled.
- Complete the extra-credit exercise available here: https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-react-part-ii/modules/wdcp-22-intermediate-react/lessons/react-forms/exercises/review off-platform. 
- Create a React form that receives a phone number and generates an Alert() telling the user that they're being sent a verification code. The form should have a label, an input field, and a 'submit' button. The input field should check each keystroke to ensure that it is a number. If it is, it should add the number to the input field. It should use ```!Number.isNaN()```. Then, as a bonus exercise, swap out the isNaN check for a regex check. 
- How to create an uncontrolled component using ```useRef()```. 
- ```useRef().current```.
- Create the same phone number form with an uncontrolled component. It should validate that the input is all numbers but only after 'Submit' has been pressed. 
- Practice drills with ```<HTMLInputElement```.
- Why you must always used uncontrolled components when dealing with ```<input>``` form elements with the ```type="file"``` attribute. 


### Uncontrolled Components

- 