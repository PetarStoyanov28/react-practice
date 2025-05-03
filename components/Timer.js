
import React, { Component } from 'react';

class Timer extends Component {
  state = { seconds: 0 };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prev => ({ seconds: prev.seconds + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Изминали секунди: {this.state.seconds}</div>;
  }
}

export default Timer;
