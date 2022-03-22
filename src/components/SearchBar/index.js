import { Segment, Form, Input } from 'semantic-ui-react';
import './searchBar.scss';

const SearchBar = () => (
  <Segment className="searchBar">
    <Form className="searchBar-form">
      <Form.Field>
        <Input
          id="input"
          className="searchBar-form--input"
          icon="search"
          placeholder="Search..."
        />
      </Form.Field>
    </Form>
  </Segment>
);

export default SearchBar;
