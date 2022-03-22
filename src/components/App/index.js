// == Import
import { useState } from 'react';
import axios from 'axios';

import Header from '../Header';
import SearchBar from '../SearchBar';
import NbResult from '../NbResult';
import Results from '../Results';

import './styles.scss';

// == Composant
const App = () => {
  // Search input value (in SearchBar component)
  const [search, setSearch] = useState('');
  // Repositories results
  const [results, setResults] = useState([]);

  const loadResults = () => {
    // TODO : Include loader

    axios.get(`https://api.github.com/search/repositories?q=${search}`)
      .then((response) => {
        console.log('repositories: ', response.data.items);
        setResults(response.data.items);
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => {
        console.log('Enf of API call');
      });
  };

  return (
    <div className="app">
      <Header />
      <SearchBar
        search={search}
        setSearch={setSearch}
        loadResults={loadResults}
      />
      <NbResult />
      <Results repoData={results} />
    </div>
  );
};

// == Export
export default App;
