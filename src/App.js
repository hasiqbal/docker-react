import logo from './logo.svg';
import zak from  './zak.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Mr pao pao
        </p>
        <img src={zak} width={350} height= {450} className="zak" alt="zaky" />
        <p>
        Hospital reni si, dudo pini si, dadi halaab ho ghi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
