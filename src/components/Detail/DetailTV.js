import React from "react";
import "../Main.css";
import Youtube from "youtube-api-search";
export default class DetailMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MovieOn: false,
      url: ""
    };
  }

  handleClick = key => {
    console.log(key, "asdasdsads");
    Youtube({ key: process.env.REACT_APP_YOUTUBE_KEY, term: key }, videos => {
      console.log(videos);
      this.setState({
        url: videos[0].id.videoId
      });
    });
    this.setState({
      url: key,
      MovieOn: true
    });
  };

  render() {
    const url = `https://image.tmdb.org/t/p/w500${this.props.data.data.backdrop_path}`;
    const sectionStyle = {
      width: "100%",
      height: "100%",
      backgroundImage: `url(${url})`
    };

    const data = this.props.moviedata.data.results.map((data, i) => {
      return (
        <p
          className="Movie_List"
          onClick={() => {
            this.handleClick(data.key);
          }}
          key={data.key}
        >
          📺{data.name}
        </p>
      );
    });
    const onMovieCheck = this.state.MovieOn ? (
      <iframe
        className="Modal_Movie"
        src={`https://www.youtube.com/embed/${this.state.url}`}
      ></iframe>
    ) : (
      <img className="Modal_Image" src={this.props.url} alt={"asdasd"}></img>
    );
    return (
      <>
        <div className="back" style={sectionStyle}>
          <div className="Modal">
            {onMovieCheck}
            <div className="Modal_Text">
              <h1>{this.props.data.data.name}</h1>
              <div>
                {this.props.data.data.release_date} ・{" "}
                {this.props.data.data.runtime} ・{" "}
                {this.props.data.data.genres[0].name} ・{" "}
                {this.props.data.data.status} ・{" "}
                {"⭐️" + this.props.data.data.vote_average + "/10"}
              </div>
              <h3>
                <p className="Modal_Desc">{this.props.data.data.overview}</p>
              </h3>
              {data}
            </div>
          </div>
        </div>
      </>
    );
  }
}
