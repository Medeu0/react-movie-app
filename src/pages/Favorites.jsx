import React from 'react'
import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import { MovieCard } from '../components/MovieCard'

export const Favorites = () => {
  const { favorites } = useMovieContext()
  if (favorites) {
    return (
      <div className="favorites">
        <div className="movies-grid">
          {favorites.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  )
}
