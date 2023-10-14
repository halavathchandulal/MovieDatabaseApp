import React, {useState, useEffect} from 'react'
import MovieGrid from '../components/MovieGrid'
import './index.css'

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([])

  useEffect(() => {
    fetchUpcomingMovies()
  }, [])

  const fetchUpcomingMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
      )
      const data = await response.json()
      setUpcomingMovies(data.results)
    } catch (error) {
      console.error('Error fetching upcoming movies:', error)
    }
  }

  return (
    <div className="upcoming-movies">
      <h1 className="movies-heading">Upcoming Movies</h1>
      <MovieGrid movies={upcomingMovies} />
    </div>
  )
}

export default UpcomingMovies
