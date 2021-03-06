// == Import
import { useState } from 'react';
import axios from 'axios';

import { Dimmer, Loader, Message } from 'semantic-ui-react';
import Header from '../Header';
import SearchBar from '../SearchBar';
import NbResult from '../NbResult';
import Results from '../Results';

import './styles.scss';

// == Composant
const App = () => {
  // Search input value (in SearchBar component)
  const [search, setSearch] = useState('');
  // Repositories results (in Result component - passing by Results component)
  const [results, setResults] = useState([]);
  // Number of results (in NbResults component)
  const [nbResults, setNbResults] = useState(0);
  // Indicates whether or not to display the loader
  const [loading, setLoading] = useState(false);

  const [apiError, setApiError] = useState(false);

  const loadResults = () => {
    setLoading(true);

    axios.get(`https://api.github.com/search/repositories?q=${search}`)
      .then((response) => {
        // console.log('repositories: ', response.data.items);
        setResults(response.data.items);
        setNbResults(response.data.total_count);
      })
      .catch((error) => {
        console.warn(error);
        setApiError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="app">
      <Header />
      <SearchBar
        search={search}
        setSearch={setSearch}
        loadResults={loadResults}
        apiError={apiError}
      />
      {apiError && (
        <Message
          error
          header="Oops"
          content="There is a mistake with your search, please try again laiter."
        />
      )}
      <NbResult nbResults={nbResults} />
      <Results repoData={results} />
      {loading && (
        <Dimmer active>
          <Loader />
        </Dimmer>
      )}
    </div>
  );
};

// == Export
export default App;
