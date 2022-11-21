import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return <img src={this.props.image} alt={this.props.description} />;
  }
}

export default ImageComponent;
