class OmdbApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'http://www.omdbapi.com/';
    }

    async searchMovies(searchTerm, genre = '') {
        try {
            const url = `${this.baseUrl}?apikey=${this.apiKey}&s=${encodeURIComponent(searchTerm)}&type=movie`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();


            if (genre && data.Search) {

                const detailedResults = await Promise.all(
                    data.Search.map(movie => this.getMovieDetails(movie.imdbID))
                );

                return {
                    ...data,
                    Search: detailedResults.filter(movie =>
                        movie.Genre && movie.Genre.includes(genre)
                    )
                };
            }

            return data;
        } catch (error) {
            console.error('Error searching movies:', error);
            throw error;
        }
    }

    async getMovieDetails(imdbId) {
        try {
            const url = `${this.baseUrl}?apikey=${this.apiKey}&i=${encodeURIComponent(imdbId)}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error getting movie details:', error);
            throw error;
        }
    }
}


const omdb = new OmdbApi('85ea52b7');;

const searchInput = document.getElementById('movieSearch');
const genreSelect = document.getElementById('type');
const resultsDiv = document.getElementById('results');

// Claude did this, need to lookup more info about debounce later
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Function to display movies
function displayMovies(movies) {
    resultsDiv.innerHTML = '';

    if (!movies || !movies.Search) {
        resultsDiv.innerHTML = '<p>No movies found</p>';
        return;
    }

    movies.Search.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'movie-card';
        movieElement.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder-image.jpg'}"
                 alt="${movie.Title}"
                 style="max-width: 200px">
            <h3>${movie.Title}</h3>
            <p>Year: ${movie.Year}</p>
            ${movie.Genre ? `<p>Genre: ${movie.Genre}</p>` : ''}
            ${movie.Plot ? `<p>Plot: ${movie.Plot}</p>` : ''}
            ${movie.imdbRating ? `<p>Rating: ${movie.imdbRating}</p>` : ''}
        `;
        resultsDiv.appendChild(movieElement);
    });
}

// Search function
const performSearch = debounce(async () => {
    const searchTerm = searchInput.value.trim();
    const selectedGenre = genreSelect.value;

    if (searchTerm.length < 3) {
        resultsDiv.innerHTML = '<p>Please enter at least 3 characters</p>';
        return;
    }

    try {
        resultsDiv.innerHTML = '<p>Loading...</p>';
        const results = await omdb.searchMovies(searchTerm, selectedGenre);
        displayMovies(results);
    } catch (error) {
        resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}, 500);

// Add event listeners
searchInput.addEventListener('input', performSearch);
genreSelect.addEventListener('change', performSearch);
