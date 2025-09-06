# React projects

### A repository for React projects I've completed as part of the Full-Stack Engineer course on Codecademy and in my spare time. 

## Study topics list:

### useState and useEffect:

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

## Rules

-  React function components should never directly update their props.
-  A presentational component has only one job: to display a component.
-  An initialization of ```state``` using the ```useState``` hook is a necessary part of any 'stateful' component.
