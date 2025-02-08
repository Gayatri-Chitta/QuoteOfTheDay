import React, { useState } from 'react';
import quotes from './quotes.json';
import './App.css';

function SearchQuotes() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredAuthors, setFilteredAuthors] = useState([]);
    const [selectedAuthor, setSelectedAuthor] = useState('');
    const [randomQuote, setRandomQuote] = useState({ text: '', author: '' });

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        if (term) {
            const authors = quotes
                .map(quote => quote.author)
                .filter(author => author.toLowerCase().includes(term.toLowerCase()));
            setFilteredAuthors([...new Set(authors)]); // Remove duplicates
        } else {
            setFilteredAuthors([]);
        }
    };

    const handleAuthorSelect = (author) => {
        setSelectedAuthor(author);
        setSearchTerm(author);
        setFilteredAuthors([]);
    };

    const handleGetQuote = () => {
        if (selectedAuthor) {
            const authorQuotes = quotes.filter(quote => quote.author === selectedAuthor);
            console.log('Author Quotes:', authorQuotes); 
            if (authorQuotes.length > 0) {
                const randomQuote = authorQuotes[Math.floor(Math.random() * authorQuotes.length)];
                setRandomQuote({ text: randomQuote.quote, author: randomQuote.author });
            } else {
                setRandomQuote({ text: 'No quotes found for this author.', author: selectedAuthor });
            }
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search by author"
                value={searchTerm}
                onChange={handleSearch}
            />
            {filteredAuthors.length > 0 && (
                <ul className="author-list">
                    {filteredAuthors.map((author, index) => (
                        <li key={index} className="author-item" onClick={() => handleAuthorSelect(author)}>
                            {author}
                        </li>
                    ))}
                </ul>
            )}
            <button className="button" onClick={handleGetQuote}>Search</button>
            {randomQuote.text && (
                <div className="quote-display">
                    <p className="quote-text">{randomQuote.text}</p>
                    <p className="quote-author">-{randomQuote.author}</p>
                </div>
            )}
        </div>
    );
}

export default SearchQuotes;