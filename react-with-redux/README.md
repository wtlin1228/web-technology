# React with Redux

在 React 中使用 Redux

### Installation
`$ yarn install`

### Usage
`$ yarn start`

### Some Note
React <--> React-Redux <--> Redux

Store -> Provider -> App -> Connect -> Components

React-Redux 提供了 Provider and Connect，他們之間的溝通是透過 Context，而不是透過 props

Connect 可以傳入兩個參數：
1. (mapStateToProps, mapDispatchToProps)：
  + `mapStateToProps` 用來綁定要將 state 的哪些資料傳進來
  + `mapDispatchToProps` 用來綁定 action dispatch

2. React Component
  
```JavaScript
import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongList = ({ selectSong, songs }) => {
  // ...
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

const mapDispatchToProps = {
  selectSong
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SongList);
```

