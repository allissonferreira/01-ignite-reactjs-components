import { Button } from './Button';

interface SideBarProps {
  genres: Array<{
    id: number;
    title: string;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  }>;
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
