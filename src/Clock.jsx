import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = { date: new Date() };
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {}

  render() {
    return <h1>{this.state.date.toLocaleString()}</h1>;
  }
}

export default Clock;
