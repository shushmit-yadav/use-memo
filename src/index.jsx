import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

/**
 * Creates a React root to render the application into the DOM element with id 'root'.
 * This root can be used to render React components into the specified container.
 * @type {React.Root}
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);