import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/pages/Home.jsx'
import Container from './components/layout/Container'
import { ThemeProvider } from '@ui5/webcomponents-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)