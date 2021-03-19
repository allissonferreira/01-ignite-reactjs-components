interface SideBarProps {
  genres: Array<{
    id: number;
    title: string;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  }>;
  iconName: string;
  selectedGenreId: number;
  handleClickButton: Function;
}

export function SideBar(props: SideBarProps) {
  
  const genres = props.genres;
  const selectedGenreId = props.selectedGenreId;
  const handleClickButton = props.handleClickButton;
}