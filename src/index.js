import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Colors from './Colors';
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Colors />
    </BrowserRouter>
  </React.StrictMode>
);
