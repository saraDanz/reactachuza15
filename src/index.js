import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { songReducer } from './store/reducers/song';
import { Provider } from 'react-redux';

const myStore = createStore(songReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={myStore}>
      {/* כך שיתפנו את הסטור לכל הקומפוננטות 
      ולרידוסר שמאוחסן כאן ישוגרו כל הפעולות מתוך האתר 
      שנשלחות עם דיספצ */}
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
