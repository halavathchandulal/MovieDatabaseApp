import React, {useState, useEffect} from 'react'
import MovieGrid from '../components/MovieGrid'
import './index.css'

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([])

  useEffect(() => {
    fetchTopRatedMovies()
  }, [])

  const fetchTopRatedMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
      )
      const data = await response.json()
      setTopRatedMovies(data.results)
    } catch (error) {
      console.error('Error fetching top-rated movies:', error)
    }
  }

  return (
    <div className="top-rated-movies">
      <h1 className="movies-heading">Top Rated Movies</h1>
      <MovieGrid movies={topRatedMovies} />
    </div>
  )
}

export default TopRatedMovies
