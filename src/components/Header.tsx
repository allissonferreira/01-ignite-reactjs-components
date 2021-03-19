interface Genre {
    title: string;
};

interface HeaderProps {
    genre: Genre;
};

export function Header(props: HeaderProps) {
  const selectedGenre = props.genre;

  return (
      <header>
        <span className="category">Category:<span> {selectedGenre.title}</span></span>
      </header>
  )
}
