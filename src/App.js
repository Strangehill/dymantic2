import React from 'react';
import styled from 'styled-components'

import logo from './logo.png';
import star from './ui/star.svg';

import './App.css';

import Lathes from './components/lathes'
import Verticals from './components/verticals'
import Horizontals from './components/horizontals'

const AppWrapper = styled.div`
  text-align: center;
`
const AppHeader = styled.header`
  /* padding: 1vmin 4vmin; */
  background: radial-gradient(
    hsl(37, 75%, 84%),
    hsl(37, 50%, 84%));
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: calc(10px + 2vmin);
  color: hsl(30, 50%, 20%);
`
const AppLogo = styled.img`
  animation: App-logo-spin infinite 6s linear;
  height: 9vmin;
  pointer-events: none;
`

const StyledStarLink = styled.h2`
  font-weight: normal;
`
const TwinklyStar = styled.img`
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  background: radial-gradient(
    hsla(42, 50%, 25%, 0.7),
    hsla(42, 0%, 100%, 0.3)
  );
`

const StarLink = ({ ...props }) => (
  <StyledStarLink>
    <TwinklyStar src={star} alt="star"  />
    <span> {props.children} </span>
  </StyledStarLink>
);

function App() {
  return (
    <AppWrapper>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <StarLink> => Links To A Reference </StarLink>
      </AppHeader>
      <main>
        <Lathes />
        <Verticals />
        <Horizontals />
      </main>
    </AppWrapper>
  );
}

export default App
