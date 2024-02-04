import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';

import './main.css';

const root = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(<App />);
