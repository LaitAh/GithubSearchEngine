import { Card, Image } from 'semantic-ui-react';
import './result.scss';

const Result = () => (
  <Card className="result">
    <Image className="result-image" wrapped ui={false} />
    <Card.Content className="result-content">
      <Card.Header className="result-content--header">
        Repo's name
      </Card.Header>
      <Card.Meta className="result-content--meta">
        Repo's meta
      </Card.Meta>
      <Card.Description className="result-content--description">
        Repo's description
      </Card.Description>
    </Card.Content>
  </Card>
);

export default Result;
