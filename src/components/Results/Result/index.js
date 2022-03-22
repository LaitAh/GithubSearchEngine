import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import './result.scss';

const Result = ({ name, description, owner }) => (
  <Card className="result" href={`https://github.com/${owner.login}/${name}`}>
    <Image src={owner.avatar_url} wrapped ui={false} className="result-image" />
    <Card.Content className="result-content">
      <Card.Header className="result-content--header">
        {name}
      </Card.Header>
      <Card.Meta className="result-content--meta">
        {owner.type}
      </Card.Meta>
      <Card.Description className="result-content--description">
        {description}
      </Card.Description>
    </Card.Content>
  </Card>
);

Result.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

Result.defaultProps = {
  description: '',
};

export default Result;
