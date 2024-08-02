import "./App.css";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"><a href="/">Dictionary</a></header>
      <Search />
      <footer className="Footer">
        Coded by{" "}
        <a href="https://github.com/wwwavvves" target="_blank" rel="noreferrer">
          Diana Guerreiro
        </a>{" "}
        and open-sourced at{" "}
        <a
          href="https://github.com/wwwavvves/dictionary_react_addon_shecodes"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
