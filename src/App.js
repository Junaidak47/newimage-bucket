import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div>

      <p>
        1st image
      </p>

      <img src="https://storage.cloud.google.com/clud-computing-bucket/image1.jpg" className="App-logo" alt="logo" />
      <p>second image</p>
      <img src="https://storage.cloud.google.com/clud-computing-bucket/image2.jpg" className="App-logo" alt="logo" />
      <p>3rd image</p>
      <img src="https://storage.cloud.google.com/clud-computing-bucket/image3.jpg" className="App-logo" alt="logo" />
     </div>
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
