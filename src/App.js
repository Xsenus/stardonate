import React, { useEffect, useRef } from 'react';
import UniverseBackground from './components/UniverseBackground';
import DonateButton from './components/DonateButton';

const App = () => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    const timeout = timeoutRef.current;
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      <UniverseBackground />
      <DonateButton />
    </div>
  );
};

export default App;
