import './App.css'

import {helloWorldComponent} from "./components.jsx";
import {component0} from "./components.jsx";

import {PurchaseButton} from "./components.jsx";

function App() {
  //const [count, setCount] = useState(0)

  return (
      <div>
          <h1>Hello World!</h1>

          {helloWorldComponent()}

          {component0()}

          <br/>

          {PurchaseButton()}

          <br />

          <br />

          <PurchaseButton />
      </div>
  )
}

export default App

