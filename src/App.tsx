import './App.css';
import CountryList from './components/CountryList';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="list" Component={CountryList} />
          <Route path="details" Component={CountryList} />
          <Route path=""  Component={CountryList} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
