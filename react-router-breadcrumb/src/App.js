import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Navbar } from './components';
import routes from './routes';

function App () {
  
  return (
    <div className="container">
      <Navbar />

      {renderRoutes(routes)}
    </div>
  )
  
}

export default App;