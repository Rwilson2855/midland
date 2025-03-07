import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Favorites({ user, favorites }) {
  const [showFavorites, setShowFavorites] = useState(false);
  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };
  return (
    <div>
      <h2>{user.username}'s Favorites</h2>
      <button onClick={toggleFavorites}>
        {showFavorites ? 'Hide Favorites' : 'Show Favorites'}
      </button>
      {showFavorites && (
        <div>
          {favorites.map((gif) => (
            <div key={gif.id}>
              <img src={gif.images.fixed_height.url} alt={gif.title} />
            </div>
          ))}
        </div>

      )}
      <Link to="/search">Find more gifs?</Link>
    </div>
  );
}

export default Favorites;