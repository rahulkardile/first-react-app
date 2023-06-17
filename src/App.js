import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg'

// 3c66d512

const movie1 = {

    "Title": "Fast Five",
    "Year": "2011",
    "imdbID": "tt1596343",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg"

}

const API_URL = 'http://www.omdbapi.com?apikey=3c66d512'

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); 

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('fast five');
    }, [])

    return (
    <div className='app'>
        <h1>MovieLand</h1>
        <div className='search'>
            <input placeholder='Search for Movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

            <img src={SearchIcon} alt='search' onClick={() => searchMovies(searchTerm)} />
        </div>

        {
            movies?.length > 0
                ? (
                    <div className="constainer">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2> No movies found</h2>
                    </div>
                )
        }



    </div>
    );
}

export default App;