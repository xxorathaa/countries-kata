import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';
import { getCountries } from './api/country';
import { Country } from './api/types';
import CountryListItem from './components/CountryListItem';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [numCountriesToDisplay, setNumCountriesToDisplay] = useState<number>(20);

  useEffect(() => {
    getCountries().then((response) => {
      setCountries(response);
    })
  }, [])

  return (
    <div className="App">
      <InfiniteScroll
        className='country-infinite-scroll'
        next={() => setNumCountriesToDisplay(numCountriesToDisplay + 20)}
        hasMore={numCountriesToDisplay < countries.length}
        loader={<h4>Loading...</h4>}
        dataLength={numCountriesToDisplay}
      >
        {countries.slice(0, numCountriesToDisplay).map((country: Country, index: number) => {
          return (
            <div key={`country-${index}`}>
              <CountryListItem country={country} />
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

export default App;
