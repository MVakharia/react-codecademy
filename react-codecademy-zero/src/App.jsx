import './App.css'

// eslint-disable-next-line no-unused-vars
import * as propPractice from "../codecademy/Part 2/propPractice.jsx";

//import {Wrapper} from "../codecademy/Part 2/propPractice.jsx";

function App() {

    const handleClick = () => {
        console.log("Button clicked");
    };

    console.log("Hello World!");

    return (
      <div>
          <h1>Hello World!</h1>
          <propPractice.Wrapper>
              <h1>Hello Michael!</h1>
              <p>This is inside the wrapper.</p>
          </propPractice.Wrapper>

          <propPractice.SubHeading>
            <p>This is inside the subheading.</p>
          </propPractice.SubHeading>

          <button onClick={handleClick}>Click Me!</button>;

      </div>
  )
}

export default App

