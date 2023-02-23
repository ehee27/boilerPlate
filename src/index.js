import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));

const App = () => {
  return <h1>Working!</h1>;
};

root.render(<App />);
