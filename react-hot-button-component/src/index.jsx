import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const clicked = this.state.clickCount + 1;
    this.setState({ clickCount: clicked });
  }

  render() {
    let clickedColor;
    const counter = this.state.clickCount;
    if (counter < 3) {
      clickedColor = 'dark-purple-background white-text button';
    } else if (counter >= 3 && counter < 6) {
      clickedColor = 'purple-background white-text button';
    } else if (counter >= 6 && counter < 9) {
      clickedColor = 'red-background white-text button';
    } else if (counter >= 9 && counter < 12) {
      clickedColor = 'orange-background white-text button';
    } else if (counter >= 12 && counter < 15) {
      clickedColor = 'yellow-background white-text button';
    } else if (counter >= 15) {
      clickedColor = 'white-background white-text button';
    }
    return <button className={clickedColor} onClick={this.handleClick}>Hot Button</button>;
  }
}

const element = (
  <div>
    <CustomButton />
  </div>
);

ReactDOM.render(element, document.getElementById('root'));
