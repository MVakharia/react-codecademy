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
- Practice drills with ```HTMLInputElement```.
- Why you must always used uncontrolled components when dealing with ```<input>``` form elements with the ```type="file"``` attribute. 
- What is ```React.createRef()```?
- Complete the Saucy Tango Food Order Form, available here: https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-react-part-ii/modules/wdcp-22-intermediate-react/projects/saucy-tango-food-order-form, off-platform. 
- Complete the Spotify Jamming project, available here: https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-react-part-ii/modules/wdcp-22-jammming/kanban_projects/jammming-react18, off-platform. 

### React Router

- Install using the command `npm install --save react-router-dom@6` in the terminal.
- Import into a project using `import { createBrowserRouter } from "react-router-dom"`.
- Initializing your router: `const router = createBrowserRouter( /* application routes are defined here */ )`.
- The defined `router` object allows us to use React Router. 
- Add `<RouterProvider router={router}/>` to your `return` statement in App.jsx 
to make the router available to the entire application.
- `createBrowserRouter` defines a router that prvents URL changes
from causing the page to reload.
- Instead, URL changes allow the `router` to determine which of its defined routes to render,
while passing along info about the current URL's path as props. 
- The `createRoutesFromElements` method is required to configure routes with JSX, and is imported from `"react-router-dom"`.

#### The `<Route>` component

- We use the React Router's `<Route>` component to define our routes. It is imported from `"react-router-dom"`.
- It is designed to render (or not render) a component based on the current URL path. 
- The current URL path determines what is rendered by the `<Route>` component. As the path changes, the output changes with it.
- The `<Route>` conponent contains two props (which are the JSX version of attributes): `path` and `element`.
- The `path` prop contains the exact URL path (a directory or link) that will cause the route to render. For example, `'/about'`.
- The `element` prop describes the component to be rendered. It typically contains a JSX element, for example, `<About />`.

- The complete block may look something like this:

```
import About from './About.js';
import { RouterProvider, createBrowserRouter, Route } from 'react-router-dom';
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/about' element={ <About/> } />
));

export default function App () {
  return (
    <RouterProvider router={ router } />
  );
}
```

- If we have certain components that we want to render with every page view, we can define a root-level component containing layout elements that we wish to render consistently. We can then nest the rest of our routes within the root:

```
import About from './About.js';
import { RouterProvider, createBrowserRouter, Route } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> }>
    // nested routes here will render along with the <Root/> component
  </Route>
));


```

- Complete some practice drills with `createBrowserRouter`, `createRoutesFromElements`, and `Route`.
- What is `Outlet` in the context of React Router?

##### Linking to routes

- When building a website with HTML, we use the `<a>` tag to create links to other pages *within the same website*. This causes the page to reload, which we don't want. 
- When building a website with React, we use the `<Link />` and `<NavLink />` components instead. 
- They use the `to` prop, similar to the `href` attribute of `<a>`.
- `<Link to="/home">Home</Link>` is what React Router uses, while `<a href="/home">Home</a>` is what HTML uses. 
- `<Link />` and `<NavLink />` components generate anchor `<a>` tags behind the scenes, but the page refresh behaviour will be disabled.

- What is the difference between the `<Link>` and `<NavLink>` components? Do some practice drills with both.

---

- Do some practice drills with dynamic routes. 

- Importing `useParams()`, then using it to destructure and access URL parameters.

##### Nested routes

- Routes within routes.
- A route containing a route is known as a **parent** route.
- A contained route is known as a **child** route.
- How to implement a nested route. 
- Implementing **index** routes.

##### The `<Navigate>` component

- Importing and using the `<Navigate>` component.
- Takes the user to the link specified by `<Navigate to="goToThisLink">` **on render**, rather than *on click*.

---
- Importing and using `useNavigate()`: `import { useNavigate } from 'react-router-dom'`
- Passing an integer as an argument to `useNavigate(int)`.
- Practice drills with `useNavigate()` and practicing passing an integer to `useNavigate(int)`.
- What does `preventDefault()` do?

##### Query parameters
- They appear in URLs with a question mark.
- Optional, used to search, sort, and/or filter resources.
- In the URL `https://www.google.com/search?q=codecademy`,
the name of the query parameter is `q`.
This URL takes you to Google's `/search` page displaying results for the search term `codecademy`. 
- What is the `useSearchParams()` hook? What should we destructure it into and why? How do we import it?
- What is a `URLSearchParams` object?
- What is `createSearchParams()`?
- What is `searchQueryParams()`?

### Unit testing with Jest

- The two key ingredients needed for testing are the **assertion library** and the **test runner.**
- Jest provides both, unlike other testing frameworks which may require you to bundle them separately. 
- Create a test using the `it()` function. 
- Test asynchronous code wtih Jest.
- Create and use mocks within your Jest tests.
- Compared to Jest, Mocha is just a test runner. 
When using Mocha, you must choose your assertion library (e.g. Chai),
your mocking tools (e.g. Sinon), and reporters.
- Jest is designed with React in mind, and is usually the better choice for React.
- Mocha is ideal for Node.js. 
- Jest is the default test runner, included and preconfigured in `create-react-app`. There is no further installation necessary. 
- If you're working without this command, follow this link to get started with Jest: https://jestjs.io/docs/getting-started
- Where should test files be located, and what should their file names be?

#### Configuring Jest

- What are command line flags?
- what does `npm test -- --coverage` do?
- `--coverage` gives us a report of which lines of our code were actually tested.
- The report becomes available in a directory named `coverage/` that is created at runtime. 
- What are the definitions of the four categories of coverage: **Statement**, **Branch**, **Function**, and **Line**?
- What is a unit test?
- What is the difference between `it()` and `test()` in Jest?
- 
