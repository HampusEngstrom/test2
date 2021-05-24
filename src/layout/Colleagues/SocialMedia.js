import styled from 'styled-components';
import {
  TwitterIcon,
  LinkedInIcon,
  GitHubIcon,
  StackOverflowIcon,
} from '../../assets/icons';

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  svg {
    margin: 0 2px;
    width: 20px;
  }
`;

const SocialMediaButtons = ({ item }) => (
  <SocialMedia>
    {item.linkedIn && (
      <a
        href={'https://www.linkedin.com' + item.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </a>
    )}
    {item.gitHub && (
      <a
        href={'http://www.github.com/' + item.gitHub}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>
    )}

    {item.stackOverflow && (
      <a
        href={'https://stackoverflow.com/users/' + item.stackOverflow}
        target="_blank"
        rel="noopener noreferrer"
      >
        <StackOverflowIcon />
      </a>
    )}
    {item.twitter && (
      <a
        href={'http://www.twitter.com/' + item.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon />
      </a>
    )}
  </SocialMedia>
);

export default SocialMediaButtons;
