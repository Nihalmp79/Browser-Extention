import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserProvider } from "./context/browser-context";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserProvider>
      <App />
    </BrowserProvider>
  </React.StrictMode>
);


reportWebVitals();
