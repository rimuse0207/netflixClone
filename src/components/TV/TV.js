import React from "react";
import Axios from "axios";
import AiringToday from "./Airing_Today";
import PopularTV from "./PopularTV";
import TopRatedTV from "./Top_RatedTV";
import "../Main.css";

class TV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prepare: false,
      airing_todayTV_datas: [],
      popularTV_datas: [],
      top_ratedTV_datas: []
    };
  }

  componentDidMount() {
    this.getData();
    console.log("asdasd");
  }
  getData = async () => {
    const airing_todayTV_datas = await Axios.get(
      "https://api.themoviedb.org/3/tv/airing_today?api_key=f765384d41ab212540d989e6d53acde4&language=en-US&page=1"
    );
    const top_ratedTV_datas = await Axios.get(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=f765384d41ab212540d989e6d53acde4&language=en-US"
    );
    const popularTV_datas = await Axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=f765384d41ab212540d989e6d53acde4&language=en-US&page=1"
    );
    this.setState({
      airing_todayTV_datas,
      top_ratedTV_datas,
      popularTV_datas,
      prepare: true
    });
    console.log(airing_todayTV_datas);
  };

  render() {
    return (
      <div className="container">
        <h2>Now Movie</h2>
        <div className="NowMovie">
          <ul>
            {this.state.prepare
              ? this.state.airing_todayTV_datas.data.results.map((data, i) => {
                  return <AiringToday key={i} data={data}></AiringToday>;
                })
              : "asdads"}
          </ul>
        </div>
        <h2>TOP Rate Movie</h2>
        <div className="ToRatedMovie">
          <ul>
            {this.state.prepare
              ? this.state.top_ratedTV_datas.data.results.map((data, i) => {
                  return <TopRatedTV key={i} data={data}></TopRatedTV>;
                })
              : "asdads"}
          </ul>
        </div>
        <h2>Popular Movie</h2>
        <div className="PopularMovie">
          <ul>
            {this.state.prepare
              ? this.state.popularTV_datas.data.results.map((data, i) => {
                  return <PopularTV key={i} data={data}></PopularTV>;
                })
              : "asdads"}
          </ul>
        </div>
      </div>
    );
  }
}

export default TV;
