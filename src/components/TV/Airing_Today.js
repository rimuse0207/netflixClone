import React from "react";
import "../Main.css";
import Modal from "react-awesome-modal";
import DetailMovie from "../Detail/DetailTV";
import axios from "axios";
export default class AiringToday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      visible: false,
      onData: false,
      datas: [],
      movieDatas: []
    };
  }
  handleClick = async id => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`
    );
    const moviedatas = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`
    );

    this.setState({
      datas: data,
      movieDatas: moviedatas,
      visible: true
    });
    console.log(data);
    this.setState({
      onData: true
    });
  };
  CloseModal = () => {
    this.setState({
      visible: false,
      onData: false
    });
  };
  render() {
    const url = `https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`;
    return (
      <li className="busutu">
        <div
          className="form"
          onClick={() => this.handleClick(this.props.data.id)}
        >
          <img
            className="busutu_img"
            src={url}
            alt={this.props.data.title}
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
          ></img>
        </div>
        <div className="Vote">
          {this.state.hover ? `⭐️${this.props.data.vote_average}/10` : ""}
        </div>

        <Modal
          visible={this.state.visible}
          width="95%"
          height="90%"
          effect="fadeInUp"
        >
          <button className="close" onClick={this.CloseModal}>
            X
          </button>
          {this.state.onData ? (
            <DetailMovie
              data={this.state.datas}
              moviedata={this.state.movieDatas}
              url={url}
            ></DetailMovie>
          ) : (
            <div>Loading...</div>
          )}
        </Modal>

        <div
          className="TEXT"
          onMouseEnter={this.hoveron}
          onMouseLeave={this.hoveroff}
        >
          {this.props.data.name}
        </div>
      </li>
    );
  }
}
