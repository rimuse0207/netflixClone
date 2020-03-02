import React from "react";
import axios from "axios";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: []
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const data = await axios.get();
    console.log(data);
  };

  render() {
    console.log(this.props);
    console.log(this.state);

    return <div>{this.props.value}</div>;
  }
}

export default Movie;
