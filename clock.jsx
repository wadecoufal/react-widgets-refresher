import React from 'react';

class Clock extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      gah: 'HAHAHAHAHA'
    }
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    this.timer = setInterval( () => {
      this.tick();
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  inClick() {
    console.log('IN CLICKKKKK');
  }

  render() {
    return (
      <div className="clock">
        <h1 onClick={this.inClick}>CLOCK</h1>
        <p>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</p>
      </div>
    )
  }
}

export default Clock;