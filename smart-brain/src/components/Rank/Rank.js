import React, { Component } from "react";

class Rank extends Component {
  constructor(props) {
    super(props);
    this.state = { emoji: "" };
  }

  componentDidMount() {
    this.generateEmoji(this.props.entries);
    console.log("did mount", this.state.emoji);
  }
  componentDidUpdate(prevProps, nextProps) {
    if (
      prevProps.entries === this.props.entries &&
      prevProps.name === this.props.name
    ) {
      return null;
    }
    this.generateEmoji(this.props.entries);
    console.log("did update", this.state.emoji);
  }

  generateEmoji = (batch) => {
    fetch(
      `https://ghpvcqf2cg.execute-api.us-east-1.amazonaws.com/prod/batch?batch=${batch}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("count", data);
        this.setState({ ...this.state, emoji: data.input });
      })
      .catch((err) => console.log(err));
  };

  render() {
    let { name, entries } = this.props;
    return (
      <div>
        <div className="white f3">
          {`${name}, your current entry count is...`}
        </div>
        <div className="white f1">{entries}</div>
        <div className="white f3">{`batch: ${this.state.emoji}`}</div>
      </div>
    );
  }
}

export default Rank;
