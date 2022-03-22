import { Card } from 'semantic-ui-react';
import Result from './Result';
import './results.scss';

const Results = () => (
  <Card.Group itemsPerRow={3} stackable className="results">
    <Result />
    <Result />
    <Result />
    <Result />
    <Result />
  </Card.Group>
);

export default Results;
