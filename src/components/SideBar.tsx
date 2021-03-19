import { Button } from './Button';

import { Genre } from '../interfaces/Genre';

interface SideBarProps {
  genres: Array<Genre>;
  iconName?: string;
  selectedGenreId: number;
  handleClickButton: Function;
}

export function SideBar(props: SideBarProps) {
  const genres = props.genres;
  const selectedGenreId = props.selectedGenreId;
  const handleClickButton = props.handleClickButton;
  
  return (
    <>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
    </>
  );
}
