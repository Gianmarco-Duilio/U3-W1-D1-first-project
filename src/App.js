import logo from "./logo.svg";
import "./App.css";

import Button from "./components/ButtonComponent";

import Image from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button nameButton="WHO" />
        <Button nameButton="IS" />
        <Button nameButton="THE" />
        <Button nameButton="G.O.A.T." />
        <Image
          urlImage="https://www.educationalsport.eu/wp-content/uploads/2023/03/Michael-Jordan-1.jpg"
          nameImage="M.J."
        />
      </header>
    </div>
  );
}

export default App;
