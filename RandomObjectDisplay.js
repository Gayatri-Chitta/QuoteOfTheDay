import React, { useState } from "react";
import quotes from "./quotes.json";
import "./App.css";

const RandomQuoteDisplay = () => {
    const [randomQuote, setRandomQuote] = useState(null);

    const getRandomQuote = () => {
        if (!quotes || quotes.length === 0) {
            console.error("Quotes data is empty or not loaded.");
            return;
        }

        const randomIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[randomIndex]);
    };

    return (
        <div>
            <br />
            <button onClick={getRandomQuote}>
                Show Random Quote
            </button>
            <div className="card">

                {randomQuote ? (
                    <div>
                        <h2>"{randomQuote.quote}"</h2>
                        <p className="author">- {randomQuote.author}</p>
                    </div>
                ) : (
                    <p>Click the button to see a quote.</p>
                )}
            </div>
        </div>
    );
};

export default RandomQuoteDisplay;


