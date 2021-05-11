import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import App from './Components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reactDom.render(<App />, document.getElementById('root'));