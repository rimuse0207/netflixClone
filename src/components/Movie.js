import React from "react";
import Axios from "axios";
import NowMovieList from "./NowMovieList";
import PopularMovie from "./PopularMovie";
import ToRatedMovie from "./TopRatedMovie";
import "./Main.css";

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prepare: false,
      NowMovie_datas: [],
      TopRatedMovie_datas: [],
      PopularMovie_datas: []
    };
  }

  componentDidMount() {
    this.getData();
    console.log("asdasd");
  }
  getData = async () => {
    const NowMovie_datas = await Axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`
    );
    const TopRatedMovie_datas = await Axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`
    );
    const PopularMovie_datas = await Axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`
    );
    this.setState({
      NowMovie_datas,
      TopRatedMovie_datas,
      PopularMovie_datas,
      prepare: true
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Now Movie</h2>
        <div className="NowMovie">
          <ul>
            {this.state.prepare
              ? this.state.NowMovie_datas.data.results.map((data, i) => {
                  return <NowMovieList key={i} data={data}></NowMovieList>;
                })
              : "asdads"}
          </ul>
        </div>
        <h2>TOP Rate Movie</h2>
        <div className="ToRatedMovie">
          <ul>
            {this.state.prepare
              ? this.state.TopRatedMovie_datas.data.results.map((data, i) => {
                  return <ToRatedMovie key={i} data={data}></ToRatedMovie>;
                })
              : "asdads"}
          </ul>
        </div>
        <h2>Popular Movie</h2>
        <div className="PopularMovie">
          <ul>
            {this.state.prepare
              ? this.state.PopularMovie_datas.data.results.map((data, i) => {
                  return <PopularMovie key={i} data={data}></PopularMovie>;
                })
              : "asdads"}
          </ul>
        </div>
      </div>
    );
  }
}

export default Movie;
