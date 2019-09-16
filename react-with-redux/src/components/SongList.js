import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongList = ({ selectSong, songs }) => {
  function renderList() {
    return songs.map(song => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button 
              className='ui button primary'
              onClick={() => selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }

  return (
    <div className='ui divided list'>{renderList()}</div>
  );
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