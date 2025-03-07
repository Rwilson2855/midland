import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

function Search({ user,  setFavorites }) {
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);

  const searchGifs = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10`);
    const data = await response.json();
    setGifs(data.data);
  };

  const addToFavorites = (gif) => {
    setFavorites(prevFavorites => [...prevFavorites, gif]);
  };

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GIFs"
      />
      <button onClick={searchGifs}>Search for Gifs!</button>
      <div>
        {gifs.map((gif) => (
          <div key={gif.id}>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
            <button onClick={() => addToFavorites(gif)}>Add to Favorites</button>
          </div>
        ))}
      </div>
      <Link to="/favorites">Go to Favorites</Link>
    </div>
  );
}

export default Search;
