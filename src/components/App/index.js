// == Import
import Header from '../Header';
import SearchBar from '../SearchBar';
import NbResult from '../NbResult';
import Results from '../Results';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <SearchBar />
    <NbResult />
    <Results />
  </div>
);

// == Export
export default App;
