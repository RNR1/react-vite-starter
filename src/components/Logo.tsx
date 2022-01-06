import styled, { keyframes } from 'styled-components';
import logo from 'assets/logo.svg';

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img.attrs({
  src: logo,
  className: 'app-logo',
  alt: 'logo',
})`
  height: 40vmin;
  pointer-events: none;
  user-select: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${AppLogoSpin} infinite 20s linear;
  }
`;

export default Logo;
