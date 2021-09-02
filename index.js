"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    let text = "Like";
    if (this.state.liked) {
      // jika sudah di like, boleh batalkan
      text = "Sudah di Like. Batalkan?";
    } else {
      // jika belum di like, like
      text = "Like";
    }

    return e(
      "button",
      { onClick: () => this.setState({ liked: !this.state.liked }) },
      text
    );
    //
  }
}

const domContainer = document.querySelector("#button");
ReactDOM.render(e(LikeButton), domContainer);
