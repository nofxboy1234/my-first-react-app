import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './odin/cssModules/Example';

import App from './odin/cssModules/Cat';
import themeA from './odin/cssModules/cat.module.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <App theme={themeA} />
  // <React.StrictMode>
  // </React.StrictMode>
);
