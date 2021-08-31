import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
// import App from './Components/Listar';
// import Search from './Search/Search';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Search /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reactDom.render(<App />, document.getElementById('root'));