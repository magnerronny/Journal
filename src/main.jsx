import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

import { JournalApp } from './JournalApp.jsx';
import { ThemeProvider } from '@emotion/react';
import { theme } from './helpers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider theme={theme} >
    <CssBaseline/>
      <JournalApp/>
    </ThemeProvider>
  </React.StrictMode>,
)
