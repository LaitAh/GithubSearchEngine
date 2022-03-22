import PropTypes from 'prop-types';
import { Segment, Form, Input } from 'semantic-ui-react';
import './searchBar.scss';

const SearchBar = ({ search, setSearch, loadResults }) => (
  <Segment className="searchBar">
    <Form
      className="searchBar-form"
      onSubmit={() => {
        // NB : preventDefault is included in semantic-ui-react
        loadResults();
      }}
    >
      <Form.Field>
        <Input
          id="input"
          className="searchBar-form--input"
          icon="search"
          placeholder="Search..."
          value={search}
          onChange={(event) => {
            const newValue = event.target.value;
            setSearch(newValue);
          }}
        />
      </Form.Field>
    </Form>
  </Segment>
);

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  loadResults: PropTypes.func.isRequired,
};

export default SearchBar;
