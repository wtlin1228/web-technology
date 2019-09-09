import React from 'react';
import WithoutHooks from './withoutHooks/components';
import WithHooks from './withHooks/components';

function App() {
  return (
    <div className="App">
      <WithoutHooks />
      <WithHooks />
    </div>
  );
}

export default App;
