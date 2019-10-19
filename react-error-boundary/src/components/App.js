import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import BuggyButton from './BuggyCounter';

const App = () => {
  
  return (
    <div>
      <h1>This counter will break as it counts to 3</h1>
      <ErrorBoundary>
        <BuggyButton />
      </ErrorBoundary>
      <h1>These two counters will break as one of them counts to 3</h1>
      <ErrorBoundary>
        <BuggyButton />
        <BuggyButton />
      </ErrorBoundary>
    </div>
  );
};

export default App;