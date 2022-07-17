import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Sudoku from './Sudoku.js';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
if (window.location.host.split('.')[0] == 'sudoku')
  {
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sudoku />} />
      </Routes>
    </BrowserRouter>
  )
  }
else{
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
