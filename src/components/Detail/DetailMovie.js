import React from "react";
import "../Main.css";
import { Redirect } from "react-router-dom";
export default class DetailMovie extends React.Component {
  render() {
    console.log(this.props.data.data);
    const url = `https://image.tmdb.org/t/p/w500${this.props.data.data.backdrop_path}`;
    const sectionStyle = {
      width: "100%",
      height: "100%",
      backgroundImage: `url(${url})`
    };
    return (
      <div style={sectionStyle}>
        <div className="Modal"></div>
      </div>
    );
  }
}
