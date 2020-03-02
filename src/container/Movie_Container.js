import Movie from "../components/Movie";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return { value: state.Movie.value };
};

export default connect(mapStateToProps)(Movie);
