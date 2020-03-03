import React from "react";
import "../Main.css";
import Modal from "react-awesome-modal";

export default class TopRatedTV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      visible: false
    };
  }
  handleClick = () => {
    console.log("asda");
    this.setState({
      visible: true
    });
  };
  CloseModal = () => {
    this.setState({
      visible: false
    });
  };
  handleTest = () => {
    console.log("dasdas");
  };
  render() {
    const url = `https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`;
    return (
      <li className="busutu">
        <div className="form" onClick={this.handleClick}>
          <img
            src={url}
            alt={this.props.data.title}
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
          ></img>
        </div>
        <Modal
          visible={this.state.visible}
          width="400"
          height="300"
          effect="fadeInUp"
        >
          <button onClick={this.CloseModal}>X</button>
        </Modal>
        <div className="Vote">
          {this.state.hover ? `⭐️${this.props.data.vote_average}/10` : ""}
        </div>

        <div className="TEXT" onClick={this.handleClick}>
          {this.props.data.name}
        </div>
      </li>
    );
  }
}
