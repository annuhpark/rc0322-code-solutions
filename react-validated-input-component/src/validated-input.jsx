import React from 'react';

export default class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: null,
      incorrect: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value.length === 0) {
      this.setState({
        error: 'A password is required.',
        incorrect: 'fas fa-times'
      });
    } else if (this.state.value.length < 8) {
      this.setState({
        error: 'Too Short! Must be 8 characters or more.',
        incorrect: 'fas fa-times'
      });
    } else if (this.state.value.length > 8) {
      this.setState({
        incorrect: 'fas fa-check'
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Password:
          <div>
            <input type="password" value={this.state.value} onChange={this.handleChange} />
            <i className={`${this.state.incorrect} left-padding`}></i>
          </div>
        </label>
        <div className='red-text'>
          {this.state.error}
        </div>
      </form>
    );
  }
}
