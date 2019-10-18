import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import './app.scss';
import colorHuntData from './data';

const ThemeContext = createContext(colorHuntData.default);

const ThemedHeader = styled.header`
  background-color: ${props => props.theme.header};
`;

const ThemedNavItem = styled.a`
  color: #ffffff;

  :hover {
    color: ${props => props.theme.navItem};
  }
`;

const ThemedNavItemSelected = styled.a`
  color: ${props => props.theme.navItem};
`;

const ThemedUnderscore = styled.span`
  background: ${props => props.theme.navItem};
`

const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <ThemedHeader className='header' theme={theme}>
      <div className='header__content-outer'>
        <div className='header__content'>
          <a href='/' className='logo'>
            <img 
              src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
              alt=''
              height='20'  
            />
            <span className='logo__text'>React</span>
          </a>
          <nav className='nav'>
            <ThemedNavItemSelected href='/' className='nav__item' theme={theme}>
              Docs
              <ThemedUnderscore className='nav__item-underscore' theme={theme}></ThemedUnderscore>
            </ThemedNavItemSelected>
            <ThemedNavItem href='/' className='nav__item' theme={theme}>Tutorial</ThemedNavItem>
            <ThemedNavItem href='/' className='nav__item' theme={theme}>Blog</ThemedNavItem>
            <ThemedNavItem href='/' className='nav__item' theme={theme}>Community</ThemedNavItem>
          </nav>
          <form></form>
          <div></div>
        </div>
      </div>
    </ThemedHeader>
  );
};

const ThemedTitle = styled.h1`
  color: ${props => props.theme.text};
`

const ThemedBody = styled.div`
  background-color: ${props => props.theme.background};
`

const Body = (props) => {
  const theme = useContext(ThemeContext);
  
  const themes = Object.keys(colorHuntData);

  return (
    <ThemedBody className='body' theme={theme}>
      <ThemedTitle theme={theme}>Choose a theme</ThemedTitle>
      {
        themes.map(name => {
          return (
            <div onClick={() => props.setThemeChosen(colorHuntData[name])}>
              <div className='box'>
                <div className='box__item' style={{ backgroundColor: `${colorHuntData[name].header}` }}></div>
                <div className='box__item' style={{ backgroundColor: `${colorHuntData[name].navItem}` }}></div>
                <div className='box__item' style={{ backgroundColor: `${colorHuntData[name].text}` }}></div>
                <div className='box__item' style={{ backgroundColor: `${colorHuntData[name].background}` }}></div>
              </div>
            </div>
          );
        })
      }
    </ThemedBody>
  );
};

const App = () => {
  const [themeChosen, setThemeChosen] = useState(colorHuntData.default);

  return (
    <ThemeContext.Provider value={themeChosen}>
      <Header />
      <Body setThemeChosen={setThemeChosen}/>
    </ThemeContext.Provider>
  );
};

export default App;