import React from 'react';
import ReactDOM from 'react-dom/client';

// function CustomButton(props) {
//   console.log('hello');
//   return (
//     <button>{props.text}</button>
//   );
// }

class CustomButton extends React.Component {
  render() {
    return <button>{this.props.text}</button>;
  }
}

const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
