// src/App.js
import React from 'react';
import Countdown from './components/Countdown';

function App() {
    // Set your target date here (e.g., New Year's Eve)
    const targetDate = new Date('2025-01-01T00:00:00');

    return (
        <div className="App">
            <Countdown targetDate={targetDate} />
        </div>
    );
}

export default App;
