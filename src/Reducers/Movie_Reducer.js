import { FETCH_NOWMOVIE } from "../Actions";

const initState = {
  value: 10,
  nowMovie: []
};

const Movie_Reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_NOWMOVIE: {
      return { ...state, nowMovie: action.data };
    }
    default:
      return state;
  }
};

export default Movie_Reducer;
