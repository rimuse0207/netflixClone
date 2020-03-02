import axios from "axios";

export const FETCH_NOWMOVIE = "@@sleny/FETCH_NOWMOVIE";

export const fetchNowMovie = async () => {
  const data = await axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=f765384d41ab212540d989e6d53acde4&language=en-US"
  );

  return {
    type: FETCH_NOWMOVIE,
    data: data.data.results
  };
};
