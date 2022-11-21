import logo from "./logo.svg";
import "./App.css";
import ButtonComonent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>The War Continues...</h1>
        <div id="bigbox">
          <div id="dogbox">
            <ImageComponent
              image="https://resources.bestfriends.org/sites/default/files/styles/large/public/2022-08/Relleno-6968_resource.jpg?itok=c-6weZtG"
              description="cute puppy"
            />
            <ButtonComonent label="I'm a dog person" />
          </div>
          <div id="catbox">
            <ImageComponent
              image="https://valevets.com/wp-content/uploads/2014/08/kitten1.jpg"
              alt="cute kitten"
            />
            <ButtonComonent label="I'm a cat person" />
          </div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          There can't be incorrect answers
        </a>
      </header>
    </div>
  );
}

export default App;
