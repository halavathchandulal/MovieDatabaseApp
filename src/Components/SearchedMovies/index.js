import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import MovieGrid from '../components/MovieGrid'
import './index.css';

const SearchedMovies = () => {
  const {query} = useParams()
  const [searchedMovies, setSearchedMovies] = useState([])

  useEffect(() => {
    fetchSearchedMovies(query)
  }, [query])

  const fetchSearchedMovies = async query => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`,
      )
      const data = await response.json()
      setSearchedMovies(data.results)
    } catch (error) {
      console.error('Error fetching searched movies:', error)
    }
  }

  return (
    <div>
     <div className="searched-movies">
      <h1 className="movies-heading">Search Results for "{query}"</h1>
      <MovieGrid movies={searchedMovies} />
    </div>
  )
}

export default SearchedMovies
