import { Segment, Image } from 'semantic-ui-react';
import githubLogo from '../../assets/images/githubLogo.svg';
import './header.scss';

const Header = () => (
  <Segment className="header">
    <Image src={githubLogo} alt="Github logo" size="massive" />
  </Segment>
);

export default Header;
