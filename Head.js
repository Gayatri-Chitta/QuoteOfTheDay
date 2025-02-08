import React from 'react';
import RandomObjectDisplay from './RandomObjectDisplay';
import QuoteOfTheDay from './QuoteOfTheDay';

function Head() {
  return (
    <div className="page-container">
      <QuoteOfTheDay />
      <RandomObjectDisplay />
    </div>
  );
}

export default Head;