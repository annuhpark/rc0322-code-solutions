import React from 'react';
import ReactDOM from 'react-dom/client';
const text = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

const $container = document.getElementById('root');
const root = ReactDOM.createRoot($container);
root.render(text);
