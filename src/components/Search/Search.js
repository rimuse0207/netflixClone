import React from "react";
import axios from "axios";
import "../Main.css";
import NowMovieList from "../NowMovieList";
import AiringToday from "../TV/Airing_Today";
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      Moviedatas: [],
      TVdatas: [],
      prepare: false
    };
  }

  handleChange = async e => {
    this.setState({ search: e.target.value });

    setTimeout(async () => {
      const dataMovie = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&query=${this.state.search}&page=1&include_adult=false`
      );
      const dataTV = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&query=${this.state.search}&page=1&include_adult=false`
      );
      this.setState({ Moviedatas: dataMovie, TVdatas: dataTV, prepare: true });
    }, 1500);
  };
  render() {
    return (
      <div className="container">
        <input
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.handleChange}
          placeholder="Search for a Movie or TV Show"
        ></input>
        <h2>Searched Movie</h2>
        <div className="NowMovie">
          <ul>
            {this.state.prepare
              ? this.state.Moviedatas.data.results.map((data, i) => {
                  return <NowMovieList key={i} data={data}></NowMovieList>;
                })
              : "Loading......"}
          </ul>
        </div>
        <h2>Searched TV TV</h2>
        <div className="NowMovie">
          <ul>
            {this.state.prepare
              ? this.state.TVdatas.data.results.map((data, i) => {
                  return <AiringToday key={i} data={data}></AiringToday>;
                })
              : "Loading......"}
          </ul>
        </div>
      </div>
    );
  }
}
