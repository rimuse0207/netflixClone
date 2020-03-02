import React from "react";
import "../Main.css";
export default class PopularTV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    const url = `https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`;
    return (
      <li className="busutu">
        <div className="form">
          <img
            src={url}
            alt={this.props.data.title}
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
          ></img>
        </div>
        <div className="Vote">
          {this.state.hover ? `⭐️${this.props.data.vote_average}/10` : ""}
        </div>

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
