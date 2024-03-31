import React from 'react';
import ReactDOM from 'react-dom/client';  

import MadeRouter from './components/MadeUpRouter/MadeRouter'
import RouterPaths from './RouterPaths';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <MadeRouter routes = {RouterPaths} />
  </React.StrictMode>
);
