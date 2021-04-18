import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
        <div className="container">
            <Weather defaultCity="London"/>
            <footer>
              This project was coded by <a href="www.linkedin.com/in/andreiacflopes" target="_blank" rel="noopener noreferrer">Andreia Lopes</a> and is <a href="https://github.com/andreiacflopes/react-weather-app-final-project" target="_blank" rel="noopener noreferrer">open-sourced on GitHub</a>
            </footer>
        </div>
    </div>
  );
}


