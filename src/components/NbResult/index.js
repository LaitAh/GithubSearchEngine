import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import './nbResult.scss';

const NbResult = ({ nbResults }) => {
  let resultOrResults;
  if (nbResults === 0 || nbResults === 1) {
    resultOrResults = 'result';
  }
  else {
    resultOrResults = 'results';
  }

  return (
    <Segment className="nbResult">
      The search returned {nbResults} {resultOrResults}
    </Segment>
  );
};

NbResult.propTypes = {
  nbResults: PropTypes.number.isRequired,
};

export default NbResult;
