import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import Result from './Result';
import './results.scss';

const Results = ({ repoData }) => (
  <Card.Group itemsPerRow={3} stackable className="results">
    {repoData.map((item) => (
      <Result
        key={item.id}
        {...item}
      />
    ))}
  </Card.Group>
);

Results.propTypes = {
  repoData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Results;
