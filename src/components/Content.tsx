import { Header } from './Header';
import { MovieCard } from './MovieCard';

import { Genre } from '../interfaces/Genre';
import { Movie } from '../interfaces/Movie';

interface ContentProps {
  movies: Array<Movie>;
  selectedGenre: Genre;
};

export function Content(props: ContentProps) {
  const movies = props.movies;
  const selectedGenre = props.selectedGenre;

  return (
    <div className="container">
      <Header
         genre={selectedGenre}
      />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
