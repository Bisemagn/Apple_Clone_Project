import React, { Component } from "react";

class HeaderPropsImages extends Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href={this.props.hrefName}>
          <img src={this.props.srcImage} />
        </a>
      </li>
    );
  }
}
export default HeaderPropsImages;
