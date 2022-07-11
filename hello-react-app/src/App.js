// src/App.js
import './App.css';
import Header from "./components/Header"
import ListElements from "./components/ListElements"
import Element from "./components/Element"
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"

function App() {
  return (
    <div className="App">
      <Header/>
      <ListElements>
        <Element
        picture={{src:icon1, alt:"icon1"}}
        title="Declarative"
        description="React makes it painless to create interactive UIs"
        />
        <Element
        picture={{src:icon2, alt:"icon2"}}
        title="Components"
        description="Build encapsulated components that manage their state"
        />
        <Element
        picture={{src:icon3, alt:"icon3"}}
        title="Single-Way"
        description="A set of immutable values are passed to the components"
        />
        <Element
        picture={{src:icon4, alt:"icon4"}}
        title="JSX"
        description="Statically-typed, designed to run on modern browsers"
        />
      </ListElements>
    </div>
  );
}
export default App;
