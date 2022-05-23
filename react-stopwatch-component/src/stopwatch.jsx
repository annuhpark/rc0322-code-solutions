import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state =
    {
      clicked: false,
      time: 0,
      timer: null
    };
  }

  handleClick() {
    const watchState = this.state;
    let currentTime = this.state.time;
    if (watchState.clicked === true) {
      this.setState({ clicked: false });
      clearInterval(this.state.timer);
    } else if (watchState.clicked === false) {
      this.setState({ clicked: true });
      this.setState({
        timer: setInterval(() => {
          this.setState({ time: currentTime++ });
        }, 1000)
      });
    }
  }

  handleReset() {
    if (this.state.clicked === false) {
      this.setState({
        time: 0,
        timer: null
      });
    }
  }

  render() {
    let switchButton = null;
    if (this.state.clicked) {
      switchButton = 'fas fa-pause';
    } else {
      switchButton = 'fas fa-play';
    }
    return (
      <div className='container'>
        <div className='row justify-content'>
          <div className='circle' onClick={this.handleReset} >{this.state.time}
          </div>
        </div>
        <div className='row justify-content'>
          <div className='top-padding'>
            <i className={switchButton} onClick={this.handleClick}></i>
          </div>
        </div>
      </div>
    );
  }
}
