import { useLocation } from "react-router-dom";

const AnimeList = () => {
  let location = useLocation();
  console.log(location.state);
  return <div>AnimeList</div>;
};

export default AnimeList;
