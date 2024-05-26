import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <AuthProvider>
        <Router>
          <CssBaseline />
          <App />
        </Router>
      </AuthProvider>
    </React.StrictMode>
  );
}
