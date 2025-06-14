import './App.css';
import CountryDetails from './components/CountryDetails';
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
          <Route path="details/:ccn3" Component={CountryDetails} />
          <Route path="" Component={CountryList} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
