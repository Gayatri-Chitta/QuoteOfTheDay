import React from "react";
import quotes from "./quotes.json";
import "./App.css";

const QuoteOfTheDay = () => {
    const today = new Date();
    const dayHash = today.getFullYear() * 1000 + today.getMonth() * 100 + today.getDate();
    const quoteIndex = dayHash % quotes.length;
    const quoteOfTheDay = quotes[quoteIndex];

    return (
        <div className="quote-container">
            <h1 className="title">Quote of the Day</h1><br />
            <div className="quote-box">
                <p className="quote-text">"{quoteOfTheDay.quote}"</p>
                <p className="author">- {quoteOfTheDay.author}</p>
            </div>
        </div>
    );
};

export default QuoteOfTheDay;
