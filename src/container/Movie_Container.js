import Movie from "../components/Movie";
import * as types from "../Actions";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return { value: state.Movie.value };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchNowMovie: () => {
      dispatch(types.fetchNowMovie());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
